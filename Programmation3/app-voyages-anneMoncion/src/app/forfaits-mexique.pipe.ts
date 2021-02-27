import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './Forfait';

@Pipe({
  name: 'forfaitsMexique'
})
export class ForfaitsMexiquePipe implements PipeTransform {

  forfaits: Forfait[];

  transform(forfaits: Forfait[]): Forfait[] {
    if (!forfaits) return [];
    return forfaits.filter(forfait => forfait.destination === "Mexique");
  }

}
