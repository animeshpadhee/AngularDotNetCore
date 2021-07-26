import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl= "https://localhost:44348/Api/Employees";
  constructor(private http:HttpClient) { }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl);
  }
    addEmployee(val:any){
      return this.http.post<any>(this.APIUrl +'/Employees',val);
  }
  editEmployee(val:any){
    return this.http.put<any>(this.APIUrl +'/employee',val);
}
deleteEmployee(val:any){
  return this.http.delete<any>(this.APIUrl +'/employee',val);
}
}
