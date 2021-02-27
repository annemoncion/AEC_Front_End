import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forfaitsAccueil'
})
export class ForfaitsAccueilPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
