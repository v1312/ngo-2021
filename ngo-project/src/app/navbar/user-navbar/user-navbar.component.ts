import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  loginData: any;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    let details=[];
    if(localStorage.getItem('_token')){
      details = JSON.parse(localStorage.getItem('_token')||'{}');
      
      console.log(details)
    
    
  }
  this.loginData=details
  }
  logOut(){
    this.authService.logOut()
  }
}

