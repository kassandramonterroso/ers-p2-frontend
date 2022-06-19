import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/users/user.model';



@Component({
  selector: 'app-update-my-account',
  templateUrl: './update-my-account.component.html',
  styleUrls: ['./update-my-account.component.css']
})

export class UpdateMyAccountComponent implements OnInit {
  updateEmployee: Employee = {
    empId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empHashedPassword: '',
    roles: {
      roleId: 0,
      role: ""
}
  }

  myData: User = this.authService.retreiveUserInfo();
  eid: any = this.myData.empId;

  constructor(private employeeService: EmployeeServiceService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.employeeService.getEmployee(this.eid).subscribe((response)=>{
      this.updateEmployee = response;
    })
  }

  updateEmployeeInfo(){
    this.employeeService.updateEmployee(this.updateEmployee).subscribe((response)=>{
      this.router.navigate(['login']);
    });
  }


}