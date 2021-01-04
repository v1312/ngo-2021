import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDonationType } from '../model/IDonationType';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:3000/api/ngo/donationType"
  constructor(private http: HttpClient) { }

  
  getDonationType(): Observable<IDonationType[]>{
    return this.http.get<IDonationType[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  getDonationTypeById(id: number): Observable<IDonationType[]>{
    return this.http.get<IDonationType[]>(this.url+ "/" + id)
  }

  errorHandler(errorHandler: any): import("rxjs").OperatorFunction<any[], any> {
    throw new Error('Method not implemented.');
  }
}
