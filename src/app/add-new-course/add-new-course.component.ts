import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course, ClassForm } from '../model/course';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent implements OnInit {

  newCourse: Course = {
    id: null,
    courseName: null,
    ects: null,
    semester: null,
    courseForm: null,
    maxNumberOfStudent: null,
    rate: null,
    logoPath: null,
    description: null
  };
  courseTypes = Object.values(ClassForm).slice(0,4);
  formOfCourse: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formOfCourse = new FormGroup({
        courseName: new FormControl(
          '', [
            Validators.required,
            
          ]
        ),
        ects: new FormControl(

        ),
        semester: new FormControl(

        ),
        maxNumberOfStudent: new FormControl(

        ),
        courseForm: new FormControl(

        ),
        description: new FormControl(

        ),
        logoPath: new FormControl(
          '', [
            Validators.required,
            Validators.pattern("https://.+\.[jpg|gif|png].*")
          ]
        )
    });
  }

}
