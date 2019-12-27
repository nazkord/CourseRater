import { Pipe, PipeTransform } from '@angular/core' 
import { Course } from '../model/course';

@Pipe({name: 'filterByName'})
export class NameFilter implements PipeTransform {
    transform(courses: Course[], search: string) : Course[] {
        if(!courses) {
            return [];
        }
        if(!search) {
            return courses;
        }
        search = search.toUpperCase();
        return courses.filter(course => {
            return course.courseName.toUpperCase().includes(search);
        })
    }
}