import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamModel } from './exam.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-examdetails',
  templateUrl: './examdetails.component.html',
  styleUrls: ['./examdetails.component.css']
})
export class ExamdetailsComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  data = '';

  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private router: Router) { }
  examModel = new ExamModel(null,null,null,null,null,null,null,null,null,null);

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      examName: ['', Validators.required],
      noofsub: ['', Validators.required],
      nos1: ['', Validators.required],
      mos1: ['', Validators.required],
      nos2: ['', Validators.required],
      mos2: ['', Validators.required],
      nos3: ['', Validators.required],
      mos3: ['', Validators.required],
      nos4: ['', Validators.required],
      mos4: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        alert("Incomplete");
        return;
    }
    // display form values on success
    // console.log(this.f['examName'].value)
    this.studentService.newMarks(this.registerForm.value);
    alert("Success");
    this.router.navigate(['/dashboard']);
}

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
  
}
