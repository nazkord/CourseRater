import { Pipe, PipeTransform } from '@angular/core' 
import { Course } from '../model/course';
import { CourseFilter } from './courseFilter';

@Pipe({
    name: 'searchPipe'
})
export class CourseFilterPipe implements PipeTransform {
    transform(courses: Course[], filter: CourseFilter ) : Course[] {

        if(!courses) {
            return [];
        }

        if(!filter) {
            return courses;
        }

        if(filter.name) {
            courses = courses.filter(course => 
                course.courseName.toUpperCase().includes(filter.name.toUpperCase()));
        }

        return courses;
    }
}