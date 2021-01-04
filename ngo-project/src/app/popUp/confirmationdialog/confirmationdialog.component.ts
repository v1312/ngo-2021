import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmationdialog',
  templateUrl: './confirmationdialog.component.html',
  styleUrls: ['./confirmationdialog.component.css']
})
export class ConfirmationdialogComponent implements OnInit {
  public user = [] as any;
  public errorMsg: any;
  dialogRef: any;
  public donationType = [] as any;
  constructor() { }

  ngOnInit(): void {
  }

}
