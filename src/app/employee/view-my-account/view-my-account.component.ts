import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-my-account',
  templateUrl: './view-my-account.component.html',
  styleUrls: ['./view-my-account.component.css']
})
export class ViewMyAccountComponent implements OnInit {

 // injecting ActivatedRoute in the constructor to retreive a route parameter
 constructor(private activatedRoute: ActivatedRoute, 
  private employeeService: EmployeeServiceService,
  private router: Router) { }

  ngOnInit(): void {
  }

  getEmployee(empId: number){
    this.employeeService.getEmployee(empId).subscribe((response)=>{
     console.log(response);
    });
   }
}
