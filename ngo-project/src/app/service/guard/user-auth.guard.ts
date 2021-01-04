import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private authSer:AuthService,private router:Router){}
  canActivate():boolean{
    if(this.authSer.loggedIn()){
      console.log(true)
      return true
    }else{
      this.router.navigateByUrl('/login')
      return false
    }
  }
  
}
