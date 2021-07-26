import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe((data)=>{
      this.EmployeeList=data;
    },(error)=>{
      alert(error.message)
    });
  }

}
