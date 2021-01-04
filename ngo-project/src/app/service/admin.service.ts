import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { IUser } from '../model/IUser';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url: string = "http://localhost:3000/api/ngo/users"
  constructor(private http: HttpClient) { }

  
  getUser(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  
  postUser(userData: any): Observable<IUser[]>{
    return this.http.post<IUser[]>(this.url ,userData)
  }

  getUserById(_id: number): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url+ "/" + _id)
  }
  
  updateUser(_id:number,userData: any): Observable<IUser[]>{
    return this.http.put<IUser[]>(this.url+'/'+_id ,userData)
  }

  deleteUser(_id: number){
  return this.http.delete(this.url+'/'+_id);
  }
  errorHandler(errorHandler: any): import("rxjs").OperatorFunction<IUser[], IUser[]> {
    throw new Error('Method not implemented.');
  }
 
}
