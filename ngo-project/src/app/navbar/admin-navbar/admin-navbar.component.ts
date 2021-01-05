import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  loginData: any;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    let details=[];
    if(localStorage.getItem('token')){
      details = JSON.parse(localStorage.getItem('token')||'{}');
      console.log(details)
    
    
  }
  this.loginData=details
  }
  logOut(){
    this.authService.logOut()
  }
}
