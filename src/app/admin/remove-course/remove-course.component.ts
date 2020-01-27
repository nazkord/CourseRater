import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course-service/course-service.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-remove-course',
  templateUrl: './remove-course.component.html',
  styleUrls: ['./remove-course.component.css']
})
export class RemoveCourseComponent implements OnInit {

  private courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
    .subscribe(courses => this.courses = courses);
  }

  deleteCourse(course: Course) {
    this.courseService.deleteCourse(course);
  }

}
