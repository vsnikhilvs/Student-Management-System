import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ExamModel } from './examdetails/exam.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public examData = new ExamModel(null,null,null,null,null,null,null,null,null,null)

  constructor(private http:HttpClient, private router: Router) { }

  newMarks(details){
    return this.http.post("http://localhost:3000/add",details)
    .subscribe(data=>console.log(data))
  }
  getMarks(){
    return this.http.get("http://localhost:3000/get");
  }
  updateMarks(details){
    return this.http.post("http://localhost:3000/update",details)
    .subscribe(data=>console.log())
  }
  deleteMarks(detailid){
    return this.http.delete("http://localhost:3000/"+detailid)
    .subscribe(data=>{
      console.log("Deleted");
    })
  }
}
