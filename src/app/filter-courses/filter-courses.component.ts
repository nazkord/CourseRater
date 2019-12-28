import { Component, OnInit } from '@angular/core';
import { CourseFilter } from '../courseFilterPipes/courseFilter';
import { FilterService } from '../filter.service';
import { CourseService } from '../course-service/course-service.service';

@Component({
  selector: 'app-filter-courses',
  templateUrl: './filter-courses.component.html',
  styleUrls: ['./filter-courses.component.css']
})
export class FilterCoursesComponent implements OnInit {
  filters: CourseFilter = {
    name: null,
    ects: null,
    semester: null
  }
  private filteredEctss: boolean[];
  private filteredSemesters: boolean[];

  constructor(private filterService: FilterService, private courseService: CourseService) { }

  ngOnInit() {
    this.getEctss();
    this.getSemesters();
  }
  
  //UI logic for saving filters (ects, semesters)
  sendFilters() : void {
    this.filterService.saveFilters(this.filters);
  }

  getSemesters(): void {
    this.courseService.getFilteredSemesters()
      .subscribe(filterSemesters => this.filteredSemesters = filterSemesters);
  }

  getEctss(): void {
    this.courseService.getFilteredEctss()
      .subscribe(filterEctss => this.filteredEctss = filterEctss);
  }
}
