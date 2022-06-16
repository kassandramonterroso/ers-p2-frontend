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

  invalidMessage: string = "";

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
  message : string = "";
  constructor(private authService: AuthService,private router:Router, private userService: UserServiceService) { }

  ngOnInit(): void {
  }
  login(): void{
    this.userService.checkUser(this.user).subscribe((response)=>{
      if(response.rolesPojo.role != "" ){
      
        this.authService.storeUserInfo(response);
       
        this.authService.isLoggedIn = true;

        if(response.rolesPojo.role == "manager"){
            
            this.authService.role="manager";
            
            this.router.navigate(['manager-home-display']);
        }else if(response.rolesPojo.role == "employee"){
          this.authService.storeUserInfo(response);
       
          this.authService.isLoggedIn = true;
            this.authService.role="employee";
            
            this.router.navigate(['employee-home-display']);
        }
      }else{
        
        this.invalidMessage = "Invalid Username/Password";
      }
    
    
    }, (err)=>{

     this.message = err.error.error;
    });
    
  
  }

}
