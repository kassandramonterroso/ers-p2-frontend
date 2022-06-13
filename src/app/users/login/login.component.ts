import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User ={
    userName: '',
    password: '',
  }
  testUser:User =  {
    userName: 'cat',
    password:'cat'
  }
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    if (this.user.userName == this.testUser.userName && this.user.password == this.testUser.password){
      this.authService.storeUserInfo(this.user);
      this.authService.isLoggedIn = true;
      this.router.navigate(['employee-home-display'])
    }else{
      console.log("invalid")
    }
    
  }

}
