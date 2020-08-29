import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ExamdetailsComponent } from './examdetails/examdetails.component';
import { ResultsComponent } from './results/results.component';
import { EditmarksComponent } from './editmarks/editmarks.component';

const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'examdetails',component:ExamdetailsComponent},
  {path:'results',component:ResultsComponent},
  {path:'editmarks',component:EditmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
