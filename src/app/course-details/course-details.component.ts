import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course-service/course-service.service';
import { UserService } from '../auth/user.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  private course: Course;
  private courseId: number;

  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.courseId =+ this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(this.courseId)
      .subscribe(course => this.course = course);
  }

  deleteCourse() {
    this.courseService.deleteCourse(this.course);
    this.router.navigate(['/course-list-filter']);
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