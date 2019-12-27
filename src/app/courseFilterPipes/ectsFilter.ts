import { Pipe, PipeTransform } from '@angular/core' 
import { Course } from '../model/course';

@Pipe({name: 'filterByName'})
export class EctsFilter implements PipeTransform {
    transform(courses: Course[], search: number) : Course[] {
        if(!courses) {
            return [];
        }
        if(!search) {
            return courses;
        }
        return courses.filter(course => {
            return course.ects === search;
        })
    }
}