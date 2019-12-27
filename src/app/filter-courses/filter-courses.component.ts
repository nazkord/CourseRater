import { Component, OnInit } from '@angular/core';
import { CourseFilter } from '../courseFilterPipes/courseFilter';
import { FilterService } from '../filter.service';

@Component({
  selector: 'app-filter-courses',
  templateUrl: './filter-courses.component.html',
  styleUrls: ['./filter-courses.component.css']
})
export class FilterCoursesComponent implements OnInit {
  courseName : string;
  ects: number;
  semester: number;
  filters: CourseFilter = {
    name: this.courseName,
    ects: this.ects,
    semester: this.semester
  }

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

  updateFilters(): void {
    this.filters.name = this.courseName;
    this.filters.ects = this.ects;
    this.filters.semester = this.semester;
  }

  sendFilter() : void {
    this.updateFilters();
    this.filterService.saveFilters(this.filters);
  }
}
