import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'agupper'
})
export class AgupperPipe implements PipeTransform {

    transform(value: string, char:string): string {
        return value.toUpperCase() + char;
    }

}