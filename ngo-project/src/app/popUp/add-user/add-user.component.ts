import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public user = [] as any;
  public errorMsg: any;
  dialogRef: any;

  constructor(private router: Router, private adminSer:AdminService) { }

  ngOnInit(): void {
  }
  userModel = new User();

  onSubmit(){
    console.log(this.userModel)
    this.adminSer.postUser(this.userModel).subscribe(
      (data: User[])=>{this.user = data; 
        this.ngOnInit(),
        location.reload();
        this.router.navigateByUrl('/admin-dashboard/user-list');
      },
        (error: any)=>this.errorMsg=error,
        () => this.router.navigateByUrl('/admin-dashboard/user-list')
    );
    
    this.adminSer.getUser().subscribe(
      (data: User[]) => this.user = data,
      (error: any) => this.errorMsg = error,
      () => console.log('completed!')
      )

  }
}



