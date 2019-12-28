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
  private filterEctss: boolean[];
  private filterSemesters: boolean[];

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.getEctss();
    this.getEctss();
  }
  
  sendFilters() : void {
    this.filterService.saveFilters(this.filters);
  }

  getSemesters(): void {
    this.filterService.currentFilterSemesters
      .subscribe(filterSemesters => this.filterSemesters = filterSemesters);
  }

  getEctss(): void {
    this.filterService.currentFilterEtcss
      .subscribe(filterEctss => this.filterEctss = filterEctss);
  }
}
