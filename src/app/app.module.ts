import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowComponent } from './employee/show/show.component';
import { AddEdiiDelComponent } from './employee/add-edit-del/add-edii-del.component';
import {SharedService} from './shared.service'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';
import { OrganizationComponent } from './organization/organization.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowComponent,
    AddEdiiDelComponent,
    OrganizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
