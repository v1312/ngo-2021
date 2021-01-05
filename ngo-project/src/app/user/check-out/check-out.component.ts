import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CheckOutService } from 'src/app/service/check-out.service';
import { DonationTypeService } from 'src/app/service/donation-type.service';
import { DonationService } from 'src/app/service/donation.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  donationTypeId!: any;
  donatType: any;
  errorMsg: any;
  checkOutDetails: any;
  total: any;

  constructor(private router:Router, 
    public checkoutService: CheckOutService,
    private auService:AuthService) { }

  ngOnInit(): void {
  

    let details=[];
    if(localStorage.getItem('DonationDetails')){
      details = JSON.parse(localStorage.getItem('DonationDetails')||'{}');
      
      console.log(details)
    
    
  }
  this.checkOutDetails=details

  let sum = 0;
    for (var i = 0; i < this.checkOutDetails.length; i++) {
        sum= sum + this.checkOutDetails[i].amount;
        
        console.log(sum);   
    }
    console.log(sum);
 this.total=sum
}
  

  onSubmit(){
  this.checkoutService.postCheckOutDetails(this.checkOutDetails).subscribe(
    (data) =>{
      this.checkOutDetails = data,
      window.alert("Successfully Donated!")
    },
    (error) => this.errorMsg = error
    
  )
  this.router.navigateByUrl('/user-dashboard')
   
}

deleteDetails(id:any){
  if(id){
    let result:any=this.checkOutDetails.slice(id)
    localStorage.setItem('DonationDetails',JSON.stringify(result))
    this.checkOutDetails=result;
    location.reload();
    
  }
  console.log(id)
  
  
  
}
updateDetails(id:any){

}

emptyCart(){
  localStorage.removeItem("DonationDetails");
  location.reload();
}   

}
