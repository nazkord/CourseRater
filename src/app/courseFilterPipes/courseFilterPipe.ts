import { Pipe, PipeTransform } from '@angular/core' 
import { Course } from '../model/course';
import { CourseFilter } from './courseFilter';

@Pipe({name: 'searchPipe'})
export class CourseFilterPipe implements PipeTransform {
    transform(courses: Course[], filter: CourseFilter ) : Course[] {
        console.log("MAINCHECK");
        if(!courses) {
            console.log("CHECK1");
            return [];
        }
        if(!filter) {
            console.log("CHECK2");
            return courses;
        }
        console.log("CHECK");
        return null;
        // return courses.filter(course => {
        //     return course.ects === search;
        // })
    }
}