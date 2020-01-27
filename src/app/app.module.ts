import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewCourseComponent } from './admin/add-new-course/add-new-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCoursesComponent } from './filter-courses/filter-courses.component';
import { CourseFilterImpurePipe } from './courseFilterPipes/CourseFilterImpurePipe';
import { SemesterFilterImpurePipe } from './courseFilterPipes/semesterFilterImpurePipe';
import { EctsFilterImpurePipe } from './courseFilterPipes/ectsFilterImpurePipe';
import { CourseListFilterComponent } from './course-list-filter/course-list-filter.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './auth/login/login.component';
import { RemoveCourseComponent } from './admin/remove-course/remove-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseItemComponent,
    CourseListComponent,
    CourseDetailsComponent,
    NavbarComponent,
    AddNewCourseComponent,
    FilterCoursesComponent,
    CourseFilterImpurePipe,
    SemesterFilterImpurePipe,
    EctsFilterImpurePipe,
    CourseListFilterComponent,
    LoginComponent,
    RemoveCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }