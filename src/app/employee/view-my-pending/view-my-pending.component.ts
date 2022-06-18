import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement.model';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-view-my-pending',
  templateUrl: './view-my-pending.component.html',
  styleUrls: ['./view-my-pending.component.css']
})
export class ViewMyPendingComponent implements OnInit {

  myData: User = this.authService.retreiveUserInfo();
  requesterId: number = this.myData.empId;

  //initializing
  allMyPendingRequests: Reimbursement[];

  constructor(private employeeService: EmployeeServiceService, private router: Router, private authService: AuthService) { 
    this.allMyPendingRequests = [];
    console.log(this.allMyPendingRequests)
  }

  loadData(){
    this.employeeService.getAllPendingByRequester(this.requesterId).subscribe((response) =>{
      console.log(response);
      this.allMyPendingRequests = response;
      })
  }

  ngOnInit(): void {
    this.loadData();
  }

}
