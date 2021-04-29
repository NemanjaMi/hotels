import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
 
  constructor(private http:HttpClient) { }
  getReview(id): Observable<any[]>{
    return this.http.get<any[]>('https://prodynafakeapi.herokuapp.com/api/reviews?hotel_id=' + id);
  }
}
