import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog-for-donation-type',
  templateUrl: './confirmation-dialog-for-donation-type.component.html',
  styleUrls: ['./confirmation-dialog-for-donation-type.component.css']
})
export class ConfirmationDialogForDonationTypeComponent implements OnInit {
  public errorMsg: any;
  dialogRef: any;
  public donationType = [] as any;
  constructor() { }

  ngOnInit(): void {
  }

}
