import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHomeDisplayComponent } from './employee/employee-home-display/employee-home-display.component';
import { SubmitRequestComponent } from './employee/submit-request/submit-request.component';
import { UpdateMyAccountComponent } from './employee/update-my-account/update-my-account.component';
import { ViewMyAccountComponent } from './employee/view-my-account/view-my-account.component';
import { ViewMyPendingComponent } from './employee/view-my-pending/view-my-pending.component';
import { ViewMyResolvedComponent } from './employee/view-my-resolved/view-my-resolved.component';
import { ManagerHomeDisplayComponent } from './manager/manager-home-display/manager-home-display.component';
import { ViewAllEmployeesComponent } from './manager/view-all-employees/view-all-employees.component';
import { ViewAllPendingRequestsComponent } from './manager/view-all-pending-requests/view-all-pending-requests.component';
import { ViewAllResolvedRequestsComponent } from './manager/view-all-resolved-requests/view-all-resolved-requests.component';
import { ViewAllRequestsComponent } from './manager/view-all-requests/view-all-requests.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewAllRequestsByRequesterComponent } from './manager/view-all-requests-by-requester/view-all-requests-by-requester.component'


@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomeDisplayComponent,
    SubmitRequestComponent,
    UpdateMyAccountComponent,
    ViewMyAccountComponent,
    ViewMyPendingComponent,
    ViewMyResolvedComponent,
    ManagerHomeDisplayComponent,
    ViewAllEmployeesComponent,
    ViewAllPendingRequestsComponent,
    ViewAllResolvedRequestsComponent,
    ViewAllRequestsComponent,
    LoginComponent,
    LogoutComponent,
    ViewAllRequestsByRequesterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
