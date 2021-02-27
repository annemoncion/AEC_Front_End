import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './Forfait';

@Pipe({
  name: 'forfaitsVedette'
})
export class ForfaitsVedettePipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    if (!forfaits)
        return forfaits;
    return forfaits.filter(forfait => forfait.vedette);
  }

}
