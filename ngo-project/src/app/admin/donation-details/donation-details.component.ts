import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationdialogComponent } from 'src/app/popUp/confirmationdialog/confirmationdialog.component';
import { DonationService } from 'src/app/service/donation.service';

@Component({
  selector: 'app-donation-details',
  templateUrl: './donation-details.component.html',
  styleUrls: ['./donation-details.component.css']
})
export class DonationDetailsComponent implements OnInit {
  donerList= [] as any;
  errorMsg: any;
  donation: any;
  

  constructor(public donatService:DonationService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.donatService.getDonerList().subscribe(
      (data) => this.donerList = data,
      ( error ) => this.errorMsg = error,
      () => console.log('completed!')
    )
  }


  viewDonationData(donation:{_id:number}){
    this.router.navigate(['/admin-dashboard/donation-data-view',donation._id])
  }
  deleteDonationData(user: { _id: number; }): void {
    let  dialogRef=  this.dialog.open(ConfirmationdialogComponent);

    dialogRef.afterClosed().subscribe(
      (      result: string) => {
        if(result === "true")
        {
          this.donatService.delete(user._id).subscribe(
            (data) =>{ this.donation = data,
              this.ngOnInit(),location.reload();
            
            },
            (error) => this.errorMsg = error,
            () => console.log('deleted!')
          );
          
        }else{
          console.log("Declined!")
        }
      }
    )
  }


}
