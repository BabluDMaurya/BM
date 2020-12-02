import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inArray'
})
export class InArrayPipe implements PipeTransform {

  transform(value: any, keyValue:string, arrayList:any[] ): any {
    
      if(value == undefined||value.length === 0)
      {
        return value;
      }
      const resultArray= [];
 
      value.forEach(function(item , i ){
         
        if(arrayList.includes(item[keyValue].toString()))
          {
              resultArray.push(item);
          }
      });
    return resultArray;
  }

}
