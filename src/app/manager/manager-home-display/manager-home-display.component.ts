import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'manager-home-display',
  templateUrl: './manager-home-display.component.html',
  styleUrls: ['./manager-home-display.component.css']
})
export class ManagerHomeDisplayComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  myData: User = this.authService.retreiveUserInfo();

}
