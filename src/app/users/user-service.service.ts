import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url: string = "http://localhost:7474/api/";
  constructor(private http: HttpClient) { }
  checkUser(user:User): Observable<User>{
    return this.http.post<User>(this.url+'employees/login', user);
  }
}
