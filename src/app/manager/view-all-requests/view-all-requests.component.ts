import { Component, OnInit } from '@angular/core';
import { Reimbursement } from 'src/app/reimbursement.model';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'view-all-requests',
  templateUrl: './view-all-requests.component.html',
  styleUrls: ['./view-all-requests.component.css']
})
export class ViewAllRequestsComponent implements OnInit {

  //initializing
  currentAllRequests: Reimbursement[];

  constructor(private managerService: ManagerServiceService) { 
    this.currentAllRequests = [];
    console.log(this.currentAllRequests)
  }

  loadData(){
    this.managerService.getAllRequests().subscribe((response) =>{
      console.log(response);
      this.currentAllRequests = response;
      })
  }

  ngOnInit(): void {
    this.loadData();
  }

}
