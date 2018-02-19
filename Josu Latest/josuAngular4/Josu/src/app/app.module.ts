import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdSidenavModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ValidationService } from './validators/validation.service';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { EqualValidator } from './validators/equal-validators.directive';
import { NumberOnlyValidator } from './validators/number.validator';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { EmployerregistrationComponent } from './register/employer/employerregistration/employerregistration.component';
import { StudentregistrationComponent } from './register/student/studentregistration/studentregistration.component';
import { CollegeregistrationComponent } from './register/college/collegeregistration/collegeregistration.component';
import { EmployerdetailsComponent } from './register/employer/employerdetails/employerdetails.component';
import { StudentdetailsComponent } from './register/student/studentdetails/studentdetails.component';
import { CollegedetailsComponent } from './register/college/collegedetails/collegedetails.component';
import { EmployerprofessionaldetailsComponent } from './register/employer/employerprofessionaldetails/employerprofessionaldetails.component';
import { StudentacademicdetailsComponent } from './register/student/studentacademicdetails/studentacademicdetails.component';
import { CommonService } from './service/common.service';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { AdminService } from './dashboards/admindashboard/admin.service';
import { AdmindashboardComponent } from './dashboards/admindashboard/admindashboard.component';
import { StudentdashboardComponent } from './dashboards/studentdashboard/studentdashboard.component';
import { EmployerdashboardComponent } from './dashboards/employerdashboard/employerdashboard.component';
import { CollegedashboardComponent } from './dashboards/collegedashboard/collegedashboard.component';
import { ApplicationsComponent } from './dashboards/admindashboard/applications/applications.component';
import { EmployerlistComponent } from './dashboards/admindashboard/employerlist/employerlist.component';
import { StudentlistComponent } from './dashboards/admindashboard/studentlist/studentlist.component';
import { CollegelistComponent } from './dashboards/admindashboard/collegelist/collegelist.component';
import { RegistersuccessComponent } from './register/registersuccess/registersuccess.component';
import { StudentEmployerlistComponent } from './dashboards/studentdashboard/student-employerlist/student-employerlist.component';
import { StudentJoblistComponent } from './dashboards/studentdashboard/student-joblist/student-joblist.component';
import { CollegeEmployerlistComponent } from './dashboards/collegedashboard/college-employerlist/college-employerlist.component';
import { CollegeStudentlistComponent } from './dashboards/collegedashboard/college-studentlist/college-studentlist.component';
import { EmployerApplicationsComponent } from './dashboards/employerdashboard/employer-applications/employer-applications.component';
import { EmployerStudentlistComponent } from './dashboards/employerdashboard/employer-studentlist/employer-studentlist.component';
import { EmployerCollegelistComponent } from './dashboards/employerdashboard/employer-collegelist/employer-collegelist.component';
import { ForgotpasswordComponent } from './register/forgotpassword/forgotpassword.component';


import { StudenteditprofileComponent } from './studenteditprofile/studenteditprofile.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { PagenationComponent } from './pagenation/pagenation.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CollegeeditprofileComponent } from './collegeeditprofile/collegeeditprofile.component';
import { EmployereditprofileComponent } from './employereditprofile/employereditprofile.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    ControlMessagesComponent,
    EqualValidator,
    NumberOnlyValidator,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    EmployerregistrationComponent,
    StudentregistrationComponent,
    CollegeregistrationComponent,
    EmployerdetailsComponent,
    StudentdetailsComponent,
    CollegedetailsComponent,
    EmployerprofessionaldetailsComponent,
    StudentacademicdetailsComponent,
    AdmindashboardComponent,
    StudentdashboardComponent,
    EmployerdashboardComponent,
    CollegedashboardComponent,
    ApplicationsComponent,
    EmployerlistComponent,
    StudentlistComponent,
    CollegelistComponent,
    RegistersuccessComponent,
    StudentEmployerlistComponent,
    StudentJoblistComponent,
    CollegeEmployerlistComponent,
    CollegeStudentlistComponent,
    EmployerApplicationsComponent,
    EmployerStudentlistComponent,
    EmployerCollegelistComponent,
    ForgotpasswordComponent,

    StudenteditprofileComponent,

    PagenationComponent,


    CollegeeditprofileComponent,

    EmployereditprofileComponent,
    SetpasswordComponent,
    ResetpasswordComponent




  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MdSidenavModule,
    MdSelectModule,
    MdInputModule,
    HttpModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      //   { path: 'Login', component: LoginComponent ,},
      // {path: 'Register',component:  RegisterComponent},

      {

        path: 'Home', component: HeaderComponent,
        children: [
          { path: '', redirectTo: 'Login', pathMatch: 'full' },
          { path: 'Login', component: LoginComponent },
          { path: 'Login/Forgotpassword', component: ForgotpasswordComponent },
          { path: 'Register', component: RegisterComponent },
          { path: 'Register/Employer', component: EmployerregistrationComponent },
          { path: 'Register/Student', component: StudentregistrationComponent },
          { path: 'Register/College', component: CollegeregistrationComponent },
          { path: 'Register/Employer/Employerdetails', component: EmployerdetailsComponent },
          { path: 'Register/Student/Studentdetails', component: StudentdetailsComponent },
          { path: 'Register/College/Collegedetails', component: CollegedetailsComponent },
          { path: 'Register/Employer/Employerdetails/Professionaldetails', component: EmployerprofessionaldetailsComponent },
          { path: 'Register/Student/Studentdetails/Academicdetails', component: StudentacademicdetailsComponent },
          { path: 'Register/Student/Studentdetails/Academicdetails/Success', component: RegistersuccessComponent},   
          { path: 'Register/Employer/Employerdetails/Professionaldetails/Success', component: RegistersuccessComponent },      
          { path: 'Register/College/Collegedetails/Success', component: RegistersuccessComponent }


        ]
      },

      { path: 'Slider', component: SliderComponent },
      {
        path: 'Admin', component: AdmindashboardComponent,
        children: [
          { path: '', redirectTo: 'Application', pathMatch: 'full' },
          { path: 'Application', component: ApplicationsComponent },
          { path: 'Employerlist', component: EmployerlistComponent },
          { path: 'Studentlist', component: StudentlistComponent },
          { path: 'Collegelist', component: CollegelistComponent },


        ]
      },

      {
        path: 'Student', component: StudentdashboardComponent,
        children: [
          { path: '', redirectTo: 'Employerlist', pathMatch: 'full' },
          { path: 'Employerlist', component: StudentEmployerlistComponent },
          { path: 'Joblist', component: StudentJoblistComponent },




        ]
      },
      {
        path: 'College', component: CollegedashboardComponent,
        children: [
          { path: '', redirectTo: 'Employerlist', pathMatch: 'full' },
          { path: 'Employerlist', component: CollegeEmployerlistComponent },
          { path: 'Studentlist', component: CollegeStudentlistComponent },



        ]

      },
      {
        path: 'Employer', component: EmployerdashboardComponent,
        children: [
          { path: '', redirectTo: 'Applications', pathMatch: 'full' },
          { path: 'Applications', component: EmployerApplicationsComponent },
          { path: 'Studentlist', component: EmployerStudentlistComponent },
          { path: 'Collegelist', component: EmployerCollegelistComponent },



        ]

      },
      {path:"Setpassword/:token", component:SetpasswordComponent},
      {path:"Resetpassword/:token", component:ResetpasswordComponent},

    ])
  ],
  providers: [ValidationService, CommonService, LoginService, AdminService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
