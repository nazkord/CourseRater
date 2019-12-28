import { EctsFilterPipe } from './ectsFilterPipe';
import { Pipe } from '@angular/core';

@Pipe({
    name: 'filterByEctsImpure',
    pure: false
  })
export class EctsFilterImpurePipe extends EctsFilterPipe {}