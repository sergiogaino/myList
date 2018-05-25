import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], terms: string): any[] {
    if (!items) return [];
    if (!terms) return items;

    let regexString = '';

    for (let i = 0; i < terms.length; i++) {
      regexString += terms.charAt(i) + '.*';
    }
    
    var rx = new RegExp(regexString, 'i');
 
    terms = terms.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().search(rx) != -1; // only filter notes title
    });

    
  }
}
