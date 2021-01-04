import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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
        console.log(data);this.router.navigateByUrl('/user-list');
      },
        (error: any)=>this.errorMsg=error,
        () => this.router.navigateByUrl('/login')
    );
    
    this.adminSer.getUser().subscribe(
      (data: User[]) => this.user = data,
      (error: any) => this.errorMsg = error,
      () => console.log('completed!')
      )

  }
}
