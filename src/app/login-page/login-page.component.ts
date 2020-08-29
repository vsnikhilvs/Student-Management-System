import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title = 'studentms';
  useremail: '';
  userpassword: '';
  
  @ViewChild('emailid') emailid:ElementRef;
  @ViewChild('password') password:ElementRef;

  constructor(private router: Router) {console.log("Login componenet entered"); }
  
  ngOnInit(): void {
    
  }
  getCred(){
    const emailid = this.emailid.nativeElement.value;
    const password = this.password.nativeElement.value;
    this.useremail = emailid;
    this.userpassword = password;
    if(emailid == "admin@gmail.com"){
      if(password == "admin"){
        alert("Success");
        this.router.navigate(['/dashboard']);
      } else {
        alert("Wrong password");
      }
    } else {
      alert("Wrong username");
    }
  }
}
