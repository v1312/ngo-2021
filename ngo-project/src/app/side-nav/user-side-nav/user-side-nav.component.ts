import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-side-nav',
  templateUrl: './user-side-nav.component.html',
  styleUrls: ['./user-side-nav.component.css']
})
export class UserSideNavComponent implements OnInit {
  checkOutDetails: any;
  total!: number;

  constructor() { }

  ngOnInit(): void {
    let details=[];
    if(localStorage.getItem('DonationDetails')){
      details = JSON.parse(localStorage.getItem('DonationDetails')||'{}');
      
      console.log(details)
    
    
  }
  this.checkOutDetails=details

}
  
  }


