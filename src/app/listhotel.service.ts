import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListhotelService {
  
  constructor(private http:HttpClient) { }
  getData(): Observable<any[]>
  {
    return this.http.get<any[]>('https://prodynafakeapi.herokuapp.com/api/hotels');
    
  }

}
