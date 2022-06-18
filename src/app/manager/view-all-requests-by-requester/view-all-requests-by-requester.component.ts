import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement.model';
import { ManagerServiceService } from 'src/app/services/manager-service.service';

@Component({
  selector: 'app-view-all-requests-by-requester',
  templateUrl: './view-all-requests-by-requester.component.html',
  styleUrls: ['./view-all-requests-by-requester.component.css']
})
export class ViewAllRequestsByRequesterComponent implements OnInit {

  currentAllRequestsByRequester: Reimbursement[];

  constructor(private activatedRoute: ActivatedRoute, 
    private managerService: ManagerServiceService,
    private router: Router) {this.currentAllRequestsByRequester=[] }

  ngOnInit(): void {
    let requesterParam: any = this.activatedRoute.snapshot.paramMap.get('requesterid');
    console.log(requesterParam);
    this.managerService.getAllRequestsByRequester(requesterParam).subscribe((response)=>{
      this.currentAllRequestsByRequester = response;
    })
  }

  

}
