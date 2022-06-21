import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceiptImage } from '../receiptImage.model';
import { Reimbursement } from '../reimbursement.model';
import { AuthService } from '../services/auth.service';
import { EmployeeServiceService } from '../services/employee-service.service';
import { User } from '../users/user.model';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  currentReimb: Reimbursement;

  myData: User = this.authService.retreiveUserInfo();
  requesterId: number = this.myData.empId;

  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeServiceService, private router: Router, private authService: AuthService, private httpClient: HttpClient) { 
    this.currentReimb = {

      reimbId: 0,
      reimbAmt: 0,
      status: {
        statusId: 0,
        status: "",
      },
      requester: {
        empId: 0,
        empFirstName: "",
        empLastName: "",
        empUserName: "",
        empHashedPassword: "",
        roles: {
          roleId: 0,
          role: "",
        }
      },
      approver: {
        empId: 0,
        empFirstName: "",
        empLastName: "",
        empUserName: "",
        empHashedPassword: "",
        roles: {
          roleId: 0,
          role: "",
        }
      }
    }
  }

  selectedFile;
  imgURL: any;
  convertedImage: any;

  message: string = "";

  receiptImage: ReceiptImage = {
    image: "",
    imageReimbId: 0
  };



  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }

  // This part is for uploading
  onUpload() {

    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

    this.httpClient.post('http://localhost:7474/api/image/'+this.currentReimb.reimbId, uploadData)
      .subscribe((response) => {
        console.log(response);
        if (response !=null) {
          this.message = "upload successful"
        } else {
          this.message = "upload failed"
        }
      });


  }

  ngOnInit(): void {
    let reimbIdParam = this.activatedRoute.snapshot.paramMap.get('reimbid');
    console.log(reimbIdParam);

    this.employeeService.getReimbById(reimbIdParam).subscribe((response)=>{
      this.currentReimb = response;
    })
  }

}
