import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User ={
    empId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empHashedPassword: '',
    rolesPojo: {
      roleId: 0,
      role: ''
    }
  }
  testUser:User =  {
    empId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empHashedPassword: '',
    rolesPojo: {
      roleId: 0,
      role: ''
    }
  }
  constructor(private authService: AuthService,private router:Router, private userService: UserServiceService) { }

  ngOnInit(): void {
  }
  login(){
    this.userService.checkUser(this.user).subscribe((response)=>{
      console.log(response);
      if (response.empId){
        this.authService.storeUserInfo(response);
        this.authService.isLoggedIn = true;
        this.router.navigate(['employee-home-display'])
      }else{
        console.log("invalid")
      }
      
    
    });
    
  
  }

}
