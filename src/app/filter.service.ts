import { Injectable } from '@angular/core';
import { CourseFilter } from './courseFilterPipes/courseFilter'
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { CourseFilterPipe } from './courseFilterPipes/courseFilterPipe';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filters = new BehaviorSubject<CourseFilter>(null);

  constructor() {}

  getFilters() : Observable<CourseFilter> {
    return this.filters.asObservable();
  }

  saveFilters(courseFilters: CourseFilter): void {
    this.filters.next(courseFilters);
  }
}
