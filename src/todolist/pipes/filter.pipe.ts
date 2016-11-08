import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterArr'
}) 

export class FilterPipe implements PipeTransform {

    transform(arr: any[], key:string, value:any): any[] {
        return arr.filter( item => item[key] === value );        
    }

} 