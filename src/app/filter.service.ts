import { Injectable } from '@angular/core';
import { CourseFilter } from './courseFilterPipes/courseFilter'
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { CourseService } from './course-service/course-service.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filters = new Subject<any>();
  currentFilterSemesters = this.courseService.filterSemestersSourse.asObservable();
  currentFilterEtcss = this.courseService.filterEctssSourse.asObservable();

  constructor(private courseService : CourseService) {}

  getFilters() : Observable<any> {
    return this.filters.asObservable();
  }

  saveFilters(courseFilters: CourseFilter): void {
    this.filters.next(courseFilters);
  }
}
