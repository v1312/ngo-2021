import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DonationService } from 'src/app/service/donation.service';

@Component({
  selector: 'app-donation-view',
  templateUrl: './donation-view.component.html',
  styleUrls: ['./donation-view.component.css']
})
export class DonationViewComponent implements OnInit {
  donationId: any;
  donationDetails: any;
  errorMsg: any;

  constructor(private router:Router, private actRoute: ActivatedRoute,private donaSer:DonationService) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap)=> {
      let id= (params.get('_id'))
      this.donationId = id;
      console.log(id);
      console.log(this.donationId);
    
          this.donaSer.getDonationTypeById(this.donationId).subscribe(
              (data: any)=>{
                  this.donationDetails=data;
                  console.log(this.donationDetails);
              },
              (error: any)=>this.errorMsg=error
          )}
      );
  }

}
