import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({    
    selector: 'todolist-header',
    template: `

        <div danger >TODOS</div>

        <h2 *csIf="flag" >Hello</h2>

      
     `
})

export class TodolistHeaderComponent {

    flag = false;

    constructor(){
        setTimeout( () => this.flag = true, 3000 )
    }
    
}  