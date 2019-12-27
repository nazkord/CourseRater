import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course-service/course-service.service';
import { Course } from '../model/course';
import { FilterService } from '../filter.service';
import { CourseFilter } from '../courseFilterPipes/courseFilter';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  private courses: Course[];
  private filters: CourseFilter;

  ngOnInit() {
    this.getCourses();
    this.getFilters();
  }

  constructor(private courseService: CourseService, private filterService: FilterService) {}

  getFilters(): void {
    this.filterService.getFilters()
      .subscribe(filters => this.filters = filters);
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  removeCourse(course: Course) {
    this.courseService.deleteCourse(course);
  }
}