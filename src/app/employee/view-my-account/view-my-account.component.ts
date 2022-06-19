import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-view-my-account',
  templateUrl: './view-my-account.component.html',
  styleUrls: ['./view-my-account.component.css']
})
export class ViewMyAccountComponent implements OnInit {

  shouldDisplay: boolean = false;

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

  getEmployee(empId: number){
    this.employeeService.getEmployee(empId).subscribe((response)=>{
     console.log(response);
    });
   }

  updateEmployeeInfo(){
    this.employeeService.updateEmployee(this.updateEmployee).subscribe((response)=>{
      this.shouldDisplay = false;
      this.router.navigate(['login']);
    });
  }

  displayRequestForm(){
    if(this.shouldDisplay){
      this.shouldDisplay = false;
    }else{
      this.shouldDisplay = true;
    }
  }


}
