import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({
    selector: '[danger]'
})

export class DangerDirective  {

    constructor(element: ElementRef, renderer: Renderer) {        
        renderer.setElementStyle(element.nativeElement, 'color', 'red');
    }


}