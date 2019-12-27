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
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCoursesComponent } from './filter-courses/filter-courses.component';
import { CourseFilterPipe } from './courseFilterPipes/courseFilterPipe';
import { CourseFilterImpurePipe } from './courseFilterPipes/CourseFilterImpurePipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseItemComponent,
    CourseListComponent,
    CourseDetailsComponent,
    NavbarComponent,
    AddNewCourseComponent,
    FilterCoursesComponent,
    CourseFilterPipe,
    CourseFilterImpurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }