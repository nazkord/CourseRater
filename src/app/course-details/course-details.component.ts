import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  @Input() course: Course;

  constructor() { }

  ngOnInit() {
  }

  courseRating(): number {
    let sum = 0;
    let counter = 0;
    this.course.rate.forEach(element => {
      counter++;
      sum += element.rating;
    });
    if (sum === 0 ) { return 0; }
    return Math.round((sum / counter) * 10) / 10;
  }

}
