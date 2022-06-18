import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { EmployeeHomeDisplayComponent } from './employee/employee-home-display/employee-home-display.component';
import { LoginComponent } from './users/login/login.component';
import { ManagerHomeDisplayComponent } from './manager/manager-home-display/manager-home-display.component';
import { ViewAllRequestsComponent } from './manager/view-all-requests/view-all-requests.component';
import { ViewAllEmployeesComponent } from './manager/view-all-employees/view-all-employees.component';
import { ViewAllRequestsByRequesterComponent } from './manager/view-all-requests-by-requester/view-all-requests-by-requester.component';
import { SubmitRequestComponent } from './employee/submit-request/submit-request.component';
import { UpdateMyAccountComponent } from './employee/update-my-account/update-my-account.component';
import { ViewMyAccountComponent } from './employee/view-my-account/view-my-account.component';
import { ViewMyPendingComponent } from './employee/view-my-pending/view-my-pending.component';
import { ViewMyResolvedComponent } from './employee/view-my-resolved/view-my-resolved.component';
import { ViewAllResolvedRequestsComponent } from './manager/view-all-resolved-requests/view-all-resolved-requests.component';
import { ViewAllPendingRequestsComponent } from './manager/view-all-pending-requests/view-all-pending-requests.component';
import { LogoutComponent } from './users/logout/logout.component';


const routes: Routes = [
{path:"", component: LoginComponent},
{path:"login", component: LoginComponent},
{path:'employee-home-display', component: EmployeeHomeDisplayComponent,canActivate:[AuthenticationGuard]},
{path: 'manager-home-display', component: ManagerHomeDisplayComponent, canActivate:[AuthenticationGuard]},
{path: 'view-all-requests', component: ViewAllRequestsComponent, canActivate:[AuthenticationGuard]},
{path: 'view-all-employees', component: ViewAllEmployeesComponent, canActivate:[AuthenticationGuard]},
{path: 'view-all-requests-by-requester/:requesterid', component: ViewAllRequestsByRequesterComponent, canActivate:[AuthenticationGuard]},
{path: 'submit-request', component: SubmitRequestComponent, canActivate:[AuthenticationGuard]},
{path: 'update-my-account', component: UpdateMyAccountComponent, canActivate:[AuthenticationGuard]},
{path: 'view-my-account', component: ViewMyAccountComponent, canActivate:[AuthenticationGuard]},
{path: 'view-my-pending', component: ViewMyPendingComponent, canActivate:[AuthenticationGuard]},
{path: 'view-my-resolved', component: ViewMyResolvedComponent, canActivate:[AuthenticationGuard]},
{path: 'view-all-resolved-requests', component: ViewAllResolvedRequestsComponent, canActivate:[AuthenticationGuard]},
{path: 'view-all-pending-requests', component: ViewAllPendingRequestsComponent, canActivate:[AuthenticationGuard]},
{path: 'logout', component: LogoutComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
