import { Injectable } from '@angular/core';
import { CourseFilter } from './courseFilterPipes/courseFilter'
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filters = new Subject<any>();

  constructor() {}

  getFilters() : Observable<any> {
    return this.filters.asObservable();
  }

  saveFilters(courseFilters: CourseFilter): void {
    this.filters.next(courseFilters);
  }
}
