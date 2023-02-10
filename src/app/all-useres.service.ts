import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AllUseresService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  getUserDetailes(id:any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
