import { Pipe, PipeTransform } from '@angular/core' 
import { Course } from '../model/course';

@Pipe({
    name: 'filterBySemester'
})
export class SemesterFilterPipe implements PipeTransform {
    transform(courses: Course[], search: number[]) : Course[] {
        if(!courses) {
            return [];
        }
        if(!search || search.length === 0) {
            return courses;
        }
        return courses.filter(course => {
            for(let semester of search) {
                if(semester === course.semester)
                    return true;
            }
            return false;
        });
    }
}