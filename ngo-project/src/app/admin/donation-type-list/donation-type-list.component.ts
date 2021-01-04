import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DonationType } from 'src/app/model/donationType';
import { IDonationType } from 'src/app/model/IDonationType';
import { ConfirmationDialogForDonationTypeComponent } from 'src/app/popUp/confirmation-dialog-for-donation-type/confirmation-dialog-for-donation-type.component';
import { DonationTypeService } from 'src/app/service/donation-type.service';


@Component({
  selector: 'app-donation-type-list',
  templateUrl: './donation-type-list.component.html',
  styleUrls: ['./donation-type-list.component.css']
})
export class DonationTypeListComponent implements OnInit {
  

  public user = [] as any;
  public errorMsg: any;
  
  DonationType!: DonationType[];
  public donatType: IDonationType[] = [];
  donationType = [] as any;
  

   constructor(
     private router: Router, private donationTypeSer:DonationTypeService ,public dialog: MatDialog
    ) { }
   ngOnInit(): void {
    this.donationTypeSer.getDonationType().subscribe(
      (data) => this.donatType = data,
      ( error ) => this.errorMsg = error,
      () => console.log('completed!')
    )
   }

  doantionTypeModel = new DonationType();

  onSubmit(){
    console.log(this.doantionTypeModel)
    this.donationTypeSer.postDonationType(this.doantionTypeModel).subscribe(
      (data)=>{this.DonationType = data; 
        console.log(data);
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

    deleteDonationType(donatType: { _id: number; }): void {
      let  dialogRef=  this.dialog.open(ConfirmationDialogForDonationTypeComponent);
  
      dialogRef.afterClosed().subscribe(
        (result: string) => {
          if(result === "true")
          {
            this.donationTypeSer.deleteDonationType(donatType._id).subscribe(
              (data) => this.donationType = data,
              (error) => this.errorMsg = error,
              () => console.log('deleted!')
            );
            this.donationTypeSer.getDonationType().subscribe(
              (data) => this.donatType = data,
              (error) => this.errorMsg = error,
              () => console.log('Updated!')
              )
          }else{
            console.log("Declined!")
          }
        }
      )
    }
  
}
