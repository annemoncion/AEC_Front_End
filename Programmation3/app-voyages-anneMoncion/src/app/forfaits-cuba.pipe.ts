import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './Forfait';

@Pipe({
  name: 'forfaitsCuba'
})
export class ForfaitsCubaPipe implements PipeTransform {

  forfaits: Forfait[];

  transform(forfaits: Forfait[]): Forfait[] {
    if (!forfaits) return [];
    return forfaits.filter(forfait => forfait.destination === "Cuba");
  }

}
