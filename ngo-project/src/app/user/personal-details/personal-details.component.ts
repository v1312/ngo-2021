import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { IDonationType } from 'src/app/model/IDonationType';
import { CheckOutService } from 'src/app/service/check-out.service';
import { DonationTypeService } from 'src/app/service/donation-type.service';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  
  

  errorMsg: any;
  public personalDetailsForm!: FormGroup ;
  personalDetails = [] as any;
  personalId=[] as any ;
  step :any=1;
  public donatType: IDonationType[] = [];
  selectedItemsList: any;
  
  donatiType: any;
  token={};
  
  constructor(private router:Router, 
    
    private fb:FormBuilder,
    private doTyService: DonationTypeService,  
    public dialog: MatDialog,
    public checkoutService: CheckOutService,
    private formBuilder: FormBuilder
    ) {
     }

    onCheckboxChange(e:any) {
      const website: FormArray = this.personalDetailsForm.get('donationType') as FormArray || [];
    
      if (e.target.checked) {
        website.push(new FormControl(e.target.value));
      } else {
         const index = website.controls.findIndex(x => x.value === e.target.value);
         website.removeAt(index);
      }
    }
      

  ngOnInit(): void {
    this.doTyService.getDonationType().subscribe(
      (data) => this.donatType = data,
      ( error ) => this.errorMsg = error,
      () => console.log('completed!')
    )
    

    this.personalDetailsForm = this.fb.group({
      donationType: this.fb.array([], [Validators.required]),
      firstName:['',[Validators.required]],
        lastName:[''],
        email:[''],
        phoneNumber:[''],
        
     
      contactDetails:new FormGroup({
        addressOne:new FormControl(''),
        addressTwo:new FormControl(''),
        city:new FormControl(''),
        state:new FormControl(''),
        postalCode:new FormControl(''),
        country:new FormControl(''),
      
    }),
    
        date:new FormControl(''),
       amount:new FormControl(''),
       
    })     
  }

  
 get firstName(){
   return this.personalDetailsForm.get('firstName')
 }

 get lastName(){
  return this.personalDetailsForm.get('lastName')!.value
}

get email(){ 
  return this.personalDetailsForm.get('email')!.value
}

get phoneNumber(){
  return this.personalDetailsForm.get('phoneNumber')!.value
}

get addressOne(){
  return this.personalDetailsForm.get('contactDetails')!.get('addressOne')!.value
}

get addressTwo(){
  return this.personalDetailsForm.get('contactDetails')!.get('addressTwo')!.value
}

get city(){
  return this.personalDetailsForm.get('contactDetails')!.get('city')!.value
}

get state(){
  return this.personalDetailsForm.get('contactDetails')!.get('state')!.value
}

get postalCode(){
  return this.personalDetailsForm.get('contactDetails')!.get('postalCode')!.value
}

get country(){
  return this.personalDetailsForm.get('contactDetails')?.get('country')!.value
}

get date(){
  return this.personalDetailsForm.get('date')!.value
}

get amount(){
  return this.personalDetailsForm.get('amount')!.value
}

// get donationType(){
//   return this.personalDetailsForm.get('donationType')!.value 
// }

  
previous(){
  this.step=this.step - 1;
}

 onSubmit(personalDetailsForm: any){
   this.step=this.step + 1;

  console.log(this.personalDetailsForm.value)
  if(this.step==3){
    console.log(this.personalDetailsForm.value)
    this.token = Object.assign(this.token,this.personalDetailsForm.value)
    this.addUser(this.token)
    

  }
}

  addUser(token: {}) {
    let details=[];
    if(localStorage.getItem('DonationDetails')){
      details = JSON.parse(localStorage.getItem('DonationDetails')||'{}');
      details= ([this.token, ...details])
      console.log(details)
      this.router.navigate(['/user-dashboard/check-out']);
    }else{
      details =[token]
    }
    localStorage.setItem('DonationDetails',JSON.stringify(details))
  
  }





}


    

