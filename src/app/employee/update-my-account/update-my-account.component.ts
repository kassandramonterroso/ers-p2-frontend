import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee/employee.model';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';



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
    empRoleId: 0
  }

  // injecting ActivatedRoute in the constructor to retreive a route parameter
  constructor(private activatedRoute: ActivatedRoute, 
              private employeeService: EmployeeServiceService,
              private router: Router) { }

  ngOnInit(): void {
    // this is the right place to retrieve the route parameter - bid from the route path
    // and send the retrived bid to service layer and fetch the book object

    // to retreive the route parameter we need the api ActivatedRoute
    // so ActivatedRoute has to be injected into this component
    let eidParam = this.activatedRoute.snapshot.paramMap.get('eid');
    console.log(eidParam);

    // now send the eidParam to the service layer and fetch the book object
    // and assign it to updateEmployee which is 2 way bound to the the template
    this.employeeService.getEmployee(eidParam).subscribe((response)=>{
      // we have to assign this response to updateBook object
      this.updateEmployee = response;
    })

  }

  updateEmployeeInfo(){
    this.employeeService.updateEmployee(this.updateEmployee).subscribe((response)=>{
      this.router.navigate(['view-my-account']);
    });
  }

  logTheChanges(title: any){
    console.log(title);
  }

}