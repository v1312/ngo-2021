import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DonationType } from 'src/app/model/donationType';
import { IDonationType } from 'src/app/model/IDonationType';
import { DonationTypeService } from 'src/app/service/donation-type.service';

@Component({
  selector: 'app-add-donation-type',
  templateUrl: './add-donation-type.component.html',
  styleUrls: ['./add-donation-type.component.css']
})
export class AddDonationTypeComponent implements OnInit {

  public user = [] as any;
  public errorMsg: any;
  
  DonationType!: DonationType[];
  public donatType: IDonationType[] = [];
  donationType = [] as any;
  constructor(private router: Router, private donationTypeSer:DonationTypeService ,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  doantionTypeModel = new DonationType();

  onSubmit(){
    console.log(this.doantionTypeModel)
    this.donationTypeSer.postDonationType(this.doantionTypeModel).subscribe(
      (data)=>{this.DonationType = data; 
        console.log(data);
        this.router.navigateByUrl('/admin-dashboard/donationType-list')
      },
        (error: any)=>this.errorMsg=error,
        () => console.log("updated")
    );
    this.donationTypeSer.getDonationType().subscribe(
      (data) => this.donatType = data,
      (error) => this.errorMsg = error,
      () => console.log('completed!')
      )
    }

}
