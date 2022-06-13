import { Injectable } from '@angular/core';
import { User } from '../users/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

 

  constructor() { }

  storeUserInfo(user: User): void{
    sessionStorage.setItem("employee", JSON.stringify(user));
  }

  retreiveUserInfo(): void{
    // return JSON.parse(sessionStorage.getItem("employee"));
  }

  removeUserInfo(): void{
    sessionStorage.removeItem("employee");
  }
}
