import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'programFilter'
})
export class ProgramFilterPipe implements PipeTransform {
    transform(value: any){
        if(value == undefined||value.length === 0)
        {
          return value;
        }
        console.log(value)
        const resultArray= [];
        let progIdList=[];
        value.forEach(function(item , i ){
           if(item.repeate_status==2)
           {
            resultArray.push(item);
           }else{
                if(item.repeate_status==1)
                {
                    resultArray.push(item);
                    progIdList.push(item.id);
                }else{
                    if(!progIdList.includes(item.parent_program))
                    {
                        resultArray.push(item);
                        progIdList.push(item.parent_program);
                    }
                }
           }
          
        });
        console.log(resultArray)
      return resultArray;
    }
}