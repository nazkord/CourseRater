import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course-service/course-service.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  private courses: Course[];

  ngOnInit() {
    this.getCourses();
  }

  constructor(private courseService: CourseService) {}

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  removeCourse(course: Course) {
    this.courseService.deleteCourse(course);
  }
}