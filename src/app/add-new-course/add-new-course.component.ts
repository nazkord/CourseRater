import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Course, ClassForm } from '../model/course';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.css']
})
export class AddNewCourseComponent implements OnInit {

  newCourse: Course;
  courseTypes = Object.values(ClassForm).slice(0,4);
  formOfCourse: FormGroup;
  courseName: FormControl;
  ects: FormControl;
  semester: FormControl;
  maxNumberOfStudent: FormControl;
  courseForm: FormControl;
  description: FormControl;
  logoPath: FormControl; 

  constructor() { }

  ngOnInit() {
    this.emptyCourse();
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
      this.courseName = new FormControl(
        '', [
          Validators.required,
          
        ]
      ),
      this.ects = new FormControl(
        '', [
          Validators.required
        ]
      ),
      this.semester = new FormControl(
        '', [
          Validators.required,
          Validators.min(0),
          Validators.max(15)
        ]
      ),
      this.maxNumberOfStudent = new FormControl(
        '', [
          Validators.required,
          Validators.min(0)
        ]
      ),
      this.courseForm = new FormControl(
        '', [
          Validators.required
        ]
      ),
      this.description = new FormControl(
        '', [
          Validators.required
        ]
      ),
      this.logoPath = new FormControl(
        '', [
          Validators.required,
          Validators.pattern("https://.+\.[jpg|gif|png].*")
        ]
      )
  }

  createForm() {
    this.formOfCourse = new FormGroup({
      courseName: this.courseName,
      ects: this.ects,
      semester: this.semester,
      maxNumberOfStudent: this.maxNumberOfStudent,
      courseForm: this.courseForm,
      description: this.description,
      logoPath: this.logoPath
    });
  }

  emptyCourse() {
    this.newCourse = {
      id: null,
      courseName: null,
      ects: null,
      semester: null,
      courseForm: null,
      maxNumberOfStudent: null,
      rate: null,
      logoPath: null,
      description: null
    }
  }

}
