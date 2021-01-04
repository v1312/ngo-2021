import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationdialogComponent } from 'src/app/popUp/confirmationdialog/confirmationdialog.component';
import { AdminService } from 'src/app/service/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/popUp/add-user/add-user.component';
import { EditUserComponent } from 'src/app/popUp/edit-user/edit-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList = [] as any;
  public errorMsg: any;
  public user = [] as any;

  constructor(private router:Router, private adminSer: AdminService,  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.adminSer.getUser().subscribe(
      (data) => this.userList = data,
      ( error ) => this.errorMsg = error,
      () => console.log('completed!')
    )
  }



  onSubmit(){
    let  dialogRef=  this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(
      result => {
        if(result === "false"){
          console.log("Declined!")
        }else{this.ngOnInit()}
      }
    )
  }

  editUser(user:{_id: number} ){
    this.router.navigate(['/admin-dashboard/editUser',user._id])
  }


  deleteUser(user: { _id: number; }): void {
    let  dialogRef=  this.dialog.open(ConfirmationdialogComponent);

    dialogRef.afterClosed().subscribe(
      result => {
        if(result === "true")
        {
          this.adminSer.deleteUser(user._id).subscribe(
            (data) =>{ this.user = data,
              this.ngOnInit(),
            this.router.navigateByUrl('/admin-dashboard/user-list')
            },
            (error) => this.errorMsg = error,
            () => console.log('deleted!')
          );
          this.adminSer.getUser().subscribe(
            (data) => this.user = data,
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
