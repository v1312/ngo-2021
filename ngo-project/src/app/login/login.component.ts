import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = [] as any;
  public errorMsg: any;
  public loginForm!: FormGroup;
  loginDetails: any;
  _loggedIn: boolean | undefined;
  userList:any;

  constructor(private router: Router,private fb:FormBuilder, private auService:AuthService,private adminSer:AdminService) {
    
 
   }

  ngOnInit(): void {
    this.adminSer.getUser().subscribe(
      (data) => {this.userList = data,
      console.log(this.userList)},
      ( error ) => this.errorMsg = error,
      () => console.log('completed!')
    )
    
      this.loginForm = this.fb.group({
      email:[''],
    password:[''],
    role:['admin']
    }) 
  }
  

  get email(){
    return this.loginForm.get('email')!.value
  }

  get password(){
    return this.loginForm.get('password')!.value
  }
  
 
  doLogin() {
    // const userData= this.loginForm.value
    // this.auService.loginUser(userData)
    // .subscribe(
    //   res => {localStorage.setItem('_token', res.token)
    //   this.router.navigate(['/user-dashboard'])
        
    //   },
    //   err => console.log(err)
    // )
    var user:any=this.loginForm.value
    console.log(user)
    
//     console.log(this.userList)
// if(this.userList.role===role)

  
// {
  console.log(this.loginForm.value)
  
    this.auService.loginUser(this.loginForm.value)
      .subscribe(
        res => {if(res.rOle==="admin"){
          
          localStorage.setItem('token',res.token)
          this.router.navigateByUrl('/admin-dashboard')
        }else{
          localStorage.setItem('_token',res._token)
          console.log(res._token)
          this.router.navigateByUrl('/user-dashboard')
        }
        },
        err => {console.log(err)
        window.alert("Invalid Email or Password!!")
        })

    }
  }  

