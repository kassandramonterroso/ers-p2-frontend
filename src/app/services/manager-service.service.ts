import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement.model';
import { SendUpdateRequest } from '../SendUpdateRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  baseUrl: string = "http://localhost:7474";

  constructor(private http: HttpClient) { }

  getAllRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+'/reimbursement');
  }

  getAllRequestsByRequester(requesterid: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+'/reimbursement/'+requesterid);
  }

  getAllPending():Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+'/allPending');
  }

  getAllResolved():Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+'/allResolved');
  }

  updateRequest(sentUpdate: SendUpdateRequest):Observable<SendUpdateRequest>{
    console.log(sentUpdate)
    return this.http.put<SendUpdateRequest>(this.baseUrl+'/updateRequest', sentUpdate);
  }
}
