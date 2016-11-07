import { Component } from '@angular/core';

@Component({
    selector: 'todolist-list-items-item',
    template: `
        <li>
           <input type='checkbox'/>
           Item
           <span>X</span> 
        </li>
    `
})

export class TodolistListItemsItemComponent {

} 