import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name: 'toUpper'
})

export class ToUpperCasePipe implements PipeTransform {

    transform(value:string): string {
        return value.toUpperCase();
    }

}