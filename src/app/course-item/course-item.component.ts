import { Component, OnInit, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() course : Course;
  @Output() deleteCourseClicked = new EventEmitter<Course>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  deleteCourse() {
    this.deleteCourseClicked.emit(this.course);
  }

  showDetails() {
    this.router.navigate(['/course-details', this.course.id])
  }
}
