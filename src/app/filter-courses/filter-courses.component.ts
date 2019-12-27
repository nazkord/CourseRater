import { Component, OnInit } from '@angular/core';
import { CourseFilter } from '../courseFilterPipes/courseFilter';
import { FilterService } from '../filter.service';

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

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }
  
  sendFilters() : void {
    this.filterService.saveFilters(this.filters);
  }
}
