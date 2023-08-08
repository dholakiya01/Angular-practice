import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdinr',
})
export class UsdinrPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    const x: any = args;
    const y: any = args;
    return value * x +y;
  }
}
