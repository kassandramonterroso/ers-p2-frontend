import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-view-all-employees',
  templateUrl: './view-all-employees.component.html',
  styleUrls: ['./view-all-employees.component.css']
})
export class ViewAllEmployeesComponent implements OnInit {

  currentAllEmployees: Employee[];

  shouldDisplay: boolean = false;

  newEmployee: Employee = {
    empId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empHashedPassword: '',
    empRoleId: 0
  };

  constructor(private employeeService: EmployeeServiceService,
              private router: Router) {
                this.currentAllEmployees = [];
               }

  ngOnInit(): void {

    this.loadData();
  }

  loadData(){
    this.employeeService.getAllEmployees().subscribe(response => {
      console.log(response);
      this.currentAllEmployees = response;
    })
  }

}
