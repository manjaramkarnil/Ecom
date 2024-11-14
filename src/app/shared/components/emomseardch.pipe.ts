import { Pipe, PipeTransform } from '@angular/core';
import { Iecom } from 'src/app/modul/modul';

@Pipe({
  name: 'emomseardch'
})
export class EmomseardchPipe implements PipeTransform {

  transform(value: Iecom[], searchval : string){

    if(!searchval){
      return value
    }
    
    if(!value){
      return []
    }
    
    return value.filter(todo=>todo.title.toLowerCase().includes(searchval))

  
  }

}
