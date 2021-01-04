import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDonate } from '../model/IDonate';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  
  private url: string = "http://localhost:3000/api/ngo/check-out"
  constructor(private http: HttpClient) { }


   
  getCheckOutDetails(): Observable<IDonate[]>{
    return this.http.get<IDonate[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  
  postCheckOutDetails(checkOutDetails: any): Observable<IDonate[]>{
    return this.http.post<IDonate[]>(this.url ,checkOutDetails)
  }

  errorHandler(errorHandler: any): import("rxjs").OperatorFunction<IDonate[], any> {
    throw new Error('Method not implemented.');
  }
}
