import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ExamModel } from '../examdetails/exam.model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  details = [];
  detailid: String = '';
  nameOfSub = [];
  markOfSub = [];

  constructor(private studentService: StudentService, private router:Router) { }
  showdata = new ExamModel(null,null,null,null,null,null,null,null,null,null)

  ngOnInit():  void {
    this.studentService.getMarks().subscribe((data)=>{
      this.details=JSON.parse(JSON.stringify(data));
    })
  }
  showData(){
    this.nameOfSub = ["Subject: "];
    this.markOfSub = ["Marks: "];
    for(let i=0; i<this.details.length; i++){
      if(this.details[i]._id == this.detailid){
        for(let j=0; j<4; j++){
          this.nameOfSub.push(this.details[i]["nos"+(j+1)]);
          this.markOfSub.push(this.details[i]["mos"+(j+1)]);
        }
      }
    }
  }

}
