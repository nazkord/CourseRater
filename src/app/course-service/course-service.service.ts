import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { MockCourseData } from '../mockData/mockCourseData'; 
import { Observable, of} from 'rxjs';

//root level -> Angular creates a single, shared instance of HeroService 
//and injects into any class that asks for it.
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = MockCourseData.Courses;

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourse(id: number): Observable<Course> {
    return of(this.courses.filter(course => course.id === id)[0]);
  }

  deleteCourse(course: Course): void {
    const index = this.courses.indexOf(course, 0);
    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}