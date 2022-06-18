import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement.model';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-view-my-resolved',
  templateUrl: './view-my-resolved.component.html',
  styleUrls: ['./view-my-resolved.component.css']
})
export class ViewMyResolvedComponent implements OnInit {

  myData: User = this.authService.retreiveUserInfo();
  requesterId: number = this.myData.empId;

  //initializing
  allMyResolvedRequests: Reimbursement[];

  constructor(private employeeService: EmployeeServiceService, private authService: AuthService) { 
    this.allMyResolvedRequests = [];
    console.log(this.allMyResolvedRequests)
  }

  loadData(){
    this.employeeService.getAllResolvedByRequester(this.requesterId).subscribe((response) =>{
      console.log(response);
      this.allMyResolvedRequests = response;
      })
  }

  ngOnInit(): void {
    this.loadData();
  }

}
