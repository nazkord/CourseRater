import { Component, OnInit, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  isClicked: boolean = false;

  @Input() course : Course;
  @Output() deleteCourseClicked = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  deleteCourse() {
    this.deleteCourseClicked.emit(this.course);
  }

  showHideDetails() {
    this.isClicked = !this.isClicked;
  }
}
