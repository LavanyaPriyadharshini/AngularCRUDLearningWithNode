import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserReg{
  name:string;
  age:number;
  email:string;
  address:string;
  contactNo:number;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class UserregService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:5000/api/UserDetails';

  postUser(user:UserReg):Observable<any>{
return this.http.post<any>(`${this.baseUrl}/register`,user)
  }
}
