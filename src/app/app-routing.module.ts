import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { EmployeeHomeDisplayComponent } from './employee/employee-home-display/employee-home-display.component';
import { LoginComponent } from './users/login/login.component';


const routes: Routes = [
{path:"login", component: LoginComponent},
{path:'employee-home-display', component: EmployeeHomeDisplayComponent,canActivate:[AuthenticationGuard]}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
