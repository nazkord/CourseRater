import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { MockCourseData } from '../mockData/mockCourseData'; 
import { Observable, of, BehaviorSubject } from 'rxjs';
import { FilterService } from '../filter.service';

//root level -> Angular creates a single, shared instance of HeroService 
//and injects into any class that asks for it.
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = MockCourseData.Courses;
  private ectss: boolean[] = new Array;
  filterEctssSourse = new BehaviorSubject<boolean[]>(this.ectss);
  private semesters: boolean[] = new Array;
  filterSemestersSourse = new BehaviorSubject<boolean[]>(this.semesters);

  constructor() {
    this.clearFilteredParameters();
    this.updateFilterParameters();
  }

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
    this.updateFilterParameters();
  }

  addCourse(course: Course): void {
    this.courses.push(course);
    this.updateFilterParameters();
  }

  clearFilteredParameters():void {
    for(let i = 0; i <= 15; i++) {
      this.ectss[i] = false;
      if(i<10)
        this.semesters[i] = false;
    }
  }

  updateFilterParameters(): void {
    this.clearFilteredParameters();
    for(let i = 0; i < this.courses.length; i++){
      this.updateCourseParameteres(this.courses[i]);
    }
    this.updateFilteredEtcss(this.ectss);
    this.updateFilteredSemesters(this.semesters);
  }

  private updateCourseParameteres(course: Course): void {
    this.semesters[course.semester-1] = true;
    this.ectss[course.ects] = true;
  }

  getFilteredSemesters() : Observable<boolean[]> {
    return new BehaviorSubject<boolean[]>(this.semesters).asObservable();
  }

  getFilteredEctss(): Observable<boolean[]> {
    return new BehaviorSubject<boolean[]>(this.ectss).asObservable();
  }

  updateFilteredSemesters(filterSemesters: boolean[]) {
    this.filterSemestersSourse.next(filterSemesters);
  }
 
  updateFilteredEtcss(filterEtcss: boolean[]) {
    this.filterEctssSourse.next(filterEtcss);
  }
}