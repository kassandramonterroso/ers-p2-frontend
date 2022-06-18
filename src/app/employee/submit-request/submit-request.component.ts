import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement.model';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { ManagerServiceService } from 'src/app/services/manager-service.service';
import { submitReimbursement } from 'src/app/submitReimbursement.model';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.css']
})
export class SubmitRequestComponent implements OnInit {

  currentAllReimb: Reimbursement[];

  shouldDisplay: boolean = false;

  newReimb: submitReimbursement = {
    reimbAmt: 0,
    requester: {
        empId: 0,
    },
    statusPojo:{
      statusId: 1
  }
  }

  

  constructor(private employeeService: EmployeeServiceService, private authService: AuthService) { 
    this.currentAllReimb = [];
    this.newReimb.requester.empId = this.requesterId;
  }

  myData: User = this.authService.retreiveUserInfo();
  requesterId: number = this.myData.empId;


  ngOnInit(): void {

    this.loadData();
  }

  loadData(){
    this.employeeService.getAllPendingByRequester(this.requesterId).subscribe((response)=>{
      console.log(response);
      this.currentAllReimb = response;
     })
  }

  displayRequestForm(){
    if(this.shouldDisplay){
      this.shouldDisplay = false;
    }else{
      this.shouldDisplay = true;
    }
  }

  submitRequest(){
    this.employeeService.addReimbReq(this.newReimb).subscribe((response)=>{
      console.log(this.newReimb);
      console.log(response);
      this.loadData();

      this.newReimb = {
        reimbAmt: 0,
        requester: {
            empId: 0,
        },
        statusPojo:{
          statusId: 0
      }
      };

      this.shouldDisplay = false;
    })
  }

}
