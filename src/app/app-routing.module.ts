import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListFilterComponent } from './course-list-filter/course-list-filter.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AddNewCourseComponent } from './admin/add-new-course/add-new-course.component';
import { RemoveCourseComponent } from './admin/remove-course/remove-course.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
    component: AddNewCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'remove-course',
    component: RemoveCourseComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
