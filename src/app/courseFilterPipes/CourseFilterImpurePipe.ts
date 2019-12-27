import { CourseFilterPipe } from './courseFilterPipe';
import { Pipe } from '@angular/core';

@Pipe({
    name: 'searchPipeImpure',
    pure: false
  })
export class CourseFilterImpurePipe extends CourseFilterPipe {}