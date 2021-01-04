import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertLetter'
})
export class ConvertLetterPipe implements PipeTransform {
  transform(name: string): string {
    var l = name.substr(0,1).toUpperCase();
    var letter =  l + name.substr(1);
    return letter ;
  }


}
