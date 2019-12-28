import { Pipe, PipeTransform } from '@angular/core' 
import { Course } from '../model/course';

@Pipe({
    name: 'filterByEcts'
})
export class EctsFilterPipe implements PipeTransform {
    transform(courses: Course[], search: number[]) : Course[] {
        if(!courses) {
            return [];
        }
        if(!search || search.length === 0) {
            return courses;
        }
        return courses.filter(course => {
            for(let ects of search) {
                if(ects === course.ects)
                    return true;
            }
            return false;
        });
    }
}