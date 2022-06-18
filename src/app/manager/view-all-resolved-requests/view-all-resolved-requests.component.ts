import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement.model';
import { AuthService } from 'src/app/services/auth.service';
import { ManagerServiceService } from 'src/app/services/manager-service.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-view-all-resolved-requests',
  templateUrl: './view-all-resolved-requests.component.html',
  styleUrls: ['./view-all-resolved-requests.component.css']
})
export class ViewAllResolvedRequestsComponent implements OnInit {

  myData: User = this.authService.retreiveUserInfo();
  requesterId: number = this.myData.empId;

  //initializing
  allResolvedRequests: Reimbursement[];

  constructor(private managerService: ManagerServiceService, private authService: AuthService) { 
    this.allResolvedRequests = [];
    console.log(this.allResolvedRequests)
  }

  loadData(){
    this.managerService.getAllResolved().subscribe((response) =>{
      console.log(response);
      this.allResolvedRequests = response;
      })
  }

  ngOnInit(): void {
    this.loadData();
  }


}
