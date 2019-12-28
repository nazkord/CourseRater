import { SemesterFilterPipe } from './semesterFilter';
import { Pipe } from '@angular/core';

@Pipe({
    name: 'filterBySemesterImpure',
    pure: false
  })
export class SemesterFilterImpurePipe extends SemesterFilterPipe {}