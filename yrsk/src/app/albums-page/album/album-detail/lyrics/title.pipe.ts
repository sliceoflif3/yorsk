import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    const pipeIndex = value.indexOf('|');
    if (pipeIndex !== -1) {
      return value.substring(0, pipeIndex - 1);
    }

    return value;
  }

}
