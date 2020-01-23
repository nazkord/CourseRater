import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListFilterComponent } from './course-list-filter/course-list-filter.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'course-list-filter', pathMatch: 'full' },
  { 
    path: 'course-list-filter',
    component: CourseListFilterComponent
  },
  { 
    path: 'course-details/:id',
    component: CourseDetailsComponent
  },
  { 
    path: 'add-course',
    component: AddNewCourseComponent
  },
  { 
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
