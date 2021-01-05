import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url:string = "http://localhost:3000/api/ngo/user/login"

  constructor(private router: Router,private http:HttpClient) { }
  loginUser(user: any) {
    return this.http.post<any>(this.url, user)
  }


  loggedIn() {
    return !!localStorage.getItem('_token')    
  }
  getToken() {
    return localStorage.getItem('_token')
  }
  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('_token')
    this.router.navigate(['/login'])
  }
  loginAdmin(user: any) {
    return this.http.post<any>(this.url, user)
  }

  loggedInAdmin() {
    return !!localStorage.getItem('token')    
  }
  getTokenAdmin() {
    return localStorage.getItem('token')
  }

}
