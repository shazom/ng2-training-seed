import { Todolist } from './todolist.provider';
import { Item } from './item';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'items',
    template: `    
    <ul>
     <item-component *ngFor="let item of list" 
                     [item]="item"
                     (itemClicked)="todolist.removeItem($event)">
     </item-component>
    </ul>
    `
})

export class ItemsComponent {

    @Input()
    private list: Item[];
    private todolist: Todolist;

    constructor(todolist: Todolist){
        this.todolist= todolist;
    }
    
} 
