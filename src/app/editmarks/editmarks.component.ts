import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamModel } from '../examdetails/exam.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-editmarks',
  templateUrl: './editmarks.component.html',
  styleUrls: ['./editmarks.component.css']
})
export class EditmarksComponent implements OnInit {
  registerForm: FormGroup;
  details = [];
  detailid: String = '';
  nameOfSub = [];
  markOfSub = [];
  data = '';
    
  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private router:Router) { }
  editItem = new ExamModel(null,null,null,null,null,null,null,null,null,null);

  ngOnInit() {
    this.studentService.getMarks().subscribe((data)=>{
        this.details=JSON.parse(JSON.stringify(data));
        })
    this.registerForm = this.formBuilder.group({
        cmos1: ['', Validators.required],
        cmos2: ['', Validators.required],
        cmos3: ['', Validators.required],
        cmos4: ['', Validators.required]
      });
  }
  get f() { return this.registerForm.controls; }

  showData(){
    this.nameOfSub = [];
    this.markOfSub = [];
    for(let i=0; i<this.details.length; i++){
      if(this.details[i]._id == this.detailid){
        for(let j=0; j<4; j++){
          this.nameOfSub.push(this.details[i]["nos"+(j+1)]);
          this.markOfSub.push(this.details[i]["mos"+(j+1)]);
        }
      }
    }
  }

  onUpdate(){
    if (this.registerForm.invalid) {
      alert("Incomplete");
      return;
    }
    let itemWithId = {
      id:this.detailid,
      editItem:this.registerForm.value
    };
    this.studentService.updateMarks(itemWithId);
    alert("Success");
    this.router.navigate(['/dashboard']);
  }

  onDelete(){
    this.studentService.deleteMarks(this.detailid);
    alert("Marks will be deleted");
    location.reload();
  }

  onReset() {
      this.registerForm.reset();
  }
  
}
