import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './Forfait';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
