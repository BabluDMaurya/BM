import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFullTextSearch',
  pure: false
})
export class MyFullTextSearchPipe implements PipeTransform {

  public transform(value: any, query: string, field?: string): any {
    console.log(value);
    console.log(query);
    console.log(field);
    if (query !== undefined) {
      query = query.toLocaleLowerCase();
    }
    return query ? value.reduce((prev, next) => {

      // If next is object and filed is undefined
      // search entire object
      if (typeof next === 'object' && field === undefined) {
        let found = false;
        Object.keys(next).forEach((key) => {
          let item = next[key];
          if (typeof item === 'string') {
            item = item.toLocaleLowerCase();
          }
          if (item.includes(query)) {
            found = true;
          }
        });
        if (found) {
          prev.push(next);
        }
      } else {
        let item = next;
        if (field !== undefined) {
          item = next[field];
        }
        if (typeof item === 'string') {
          item = item.toLocaleLowerCase();
        }
        if (item.includes(query)) { prev.push(next); }
      }
      return prev;
    }, []) : value;
  }
  }


