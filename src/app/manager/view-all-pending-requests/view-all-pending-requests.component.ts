import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement.model';
import { SendUpdateRequest } from 'src/app/SendUpdateRequest.model';
import { AuthService } from 'src/app/services/auth.service';
import { ManagerServiceService } from 'src/app/services/manager-service.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'view-all-pending-requests',
  templateUrl: './view-all-pending-requests.component.html',
  styleUrls: ['./view-all-pending-requests.component.css']
})
export class ViewAllPendingRequestsComponent implements OnInit {

  myData: User = this.authService.retreiveUserInfo();
  requesterId: number = this.myData.empId;

  //initializing
  allPendingRequests: Reimbursement[];

  constructor(private managerService: ManagerServiceService, private authService: AuthService) { 
    this.allPendingRequests = [];
    console.log(this.allPendingRequests)
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.managerService.getAllPending().subscribe((response) =>{
      console.log(response);
      this.allPendingRequests = response;
      })
  }
   
  approveRequest(reimbId: number){
    let newApproveRequest: SendUpdateRequest = {

      reimbId: reimbId,
      statusPojo:{
        statusId: 2
      },
      approver: {
        empId: this.requesterId,
      }     
    }

    this.managerService.updateRequest(newApproveRequest).subscribe((response)=>{
      console.log(response);
      this.loadData();
     });

    }
    
   

    rejectRequest(reimbId: number){
      let newRejectRequest: SendUpdateRequest = {

        reimbId: reimbId,
        statusPojo:{
          statusId: 3
        },
        approver: {
          empId: this.requesterId,
        }     
      }
  
      this.managerService.updateRequest(newRejectRequest).subscribe((response)=>{
        console.log(response);
        this.loadData();
       });
  
      }

  }

  

  


