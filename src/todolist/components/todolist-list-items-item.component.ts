import { Item } from './../providers/item';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'todolist-list-items-item',
    template: `
        <li>
           <input type='checkbox' [checked]='item.done'/>
           {{ item.title }}
           <span>X</span> 
        </li>
    `
})

export class TodolistListItemsItemComponent {
    @Input() item: Item;
} 