import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {OrganizationComponent} from './organization/organization.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'organization',component:OrganizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


