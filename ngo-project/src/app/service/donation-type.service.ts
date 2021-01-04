import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DonationType } from '../model/donationType';
import { IDonationType } from '../model/IDonationType';


@Injectable({
  providedIn: 'root'
})
export class DonationTypeService {

  
  private url: string = "http://localhost:3000/api/ngo/donationType"
  constructor(private http: HttpClient) { }

  
  getDonationType(): Observable<IDonationType[]>{
    return this.http.get<IDonationType[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  getDonationTypeById(_id: number): Observable<IDonationType[]>{
    return this.http.get<IDonationType[]>(this.url+ "/" + _id)
  }

  postDonationType(userData: any): Observable<DonationType[]>{
    return this.http.post<DonationType[]>(this.url ,userData)
  }

  deleteDonationType(_id: number){
    return this.http.delete(this.url+'/'+_id);
    }
  errorHandler(errorHandler: any): import("rxjs").OperatorFunction<any[], any> {
    throw new Error('Method not implemented.');
  }
}
