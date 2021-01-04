import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IDonationType } from 'src/app/model/IDonationType';
import { DonationTypeService } from 'src/app/service/donation-type.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  public errorMsg: any;
  public donationType: IDonationType[] = [];

  constructor(private router:Router, private doTyService: DonationTypeService,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.doTyService.getDonationType().subscribe(
      (data) => this.donationType = data,
      ( error ) => this.errorMsg = error,
      () => console.log('completed!')
    )
  }

  
  personalDetails( ){
    this.router.navigateByUrl('user-dashboard/personal-details')
  }
}
