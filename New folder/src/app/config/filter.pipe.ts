import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string, propertyName:string ): any {
      if(value.length === 0)
      {
        return value;
      }
      const resultArray= [];

      value.forEach(function(item , i ){
        if(item[propertyName] === filterString)
          {
              resultArray.push(item);
          }
      });
    if(resultArray.length<1)
    {
      resultArray.push({'empty':'no data found'}) 
    }
    return resultArray;
  }

}
