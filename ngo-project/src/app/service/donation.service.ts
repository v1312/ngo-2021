import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Donate } from '../model/donate';
import { IDonate } from '../model/IDonate';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  private url: string = "http://localhost:3000/api/ngo/donation"
  constructor(private http: HttpClient) { }

  

  getDonerList(): Observable<IDonate[]>{
    return this.http.get<IDonate[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  getDonationTypeById(_id: number): Observable<IDonate[]>{
    return this.http.get<IDonate[]>(this.url+ "/" + _id)
  }

  
  delete(_id: number){
    return this.http.delete(this.url+'/'+_id);
    
  }

  updateDonation(_id:number,donationData: any): Observable<Donate[]>{
    return this.http.put<Donate[]>(this.url+'/'+_id ,donationData)
  }

  

  errorHandler(errorHandler: any): import("rxjs").OperatorFunction<Donate[], any> {
    throw new Error('Method not implemented.');
  }

  
  
}
