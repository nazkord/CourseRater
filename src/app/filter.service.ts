import { Injectable } from '@angular/core';
import { CourseFilter } from './courseFilterPipes/courseFilter'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filters: CourseFilter;

  getFilters() : Observable<CourseFilter> {
    return of(this.filters);
  }

  saveFilters(courseFilters: CourseFilter): void {
    this.filters = courseFilters;
  }

  constructor() { }
}
