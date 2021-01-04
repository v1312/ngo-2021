import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public userId!: any;
  userDetails: any;
  errorMsg: any;
  

  constructor(private router:Router, private actRoute: ActivatedRoute, private adminSer: AdminService) { }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap)=> {
    let id= (params.get('_id'))
    this.userId = id;
    console.log(id);
    console.log(this.userId);
  
        this.adminSer.getUserById(this.userId).subscribe(
            (data: any)=>{
                this.userDetails=data;
                console.log(this.userDetails);
            },
            (error: any)=>this.errorMsg=error
        )}
    );
  }
  update(userId: number,userDetails: any){
    console.log(this.userDetails);
    console.log(this.userId);
    this.adminSer.updateUser(this.userId,this.userDetails).subscribe(
      (data: any)=>{
        this.userDetails=data;
        console.log(this.userDetails);
    },
    (error: any)=>this.errorMsg=error
  ); 

  this.adminSer.getUser().subscribe(
      (data: User[]) => this.userDetails = data,
      (error: any) => this.errorMsg = error,
      () => console.log('completed!')
    )
    this.router.navigate(['/admin-dashboard/user-list']);
  }
}
