import { Item } from './item';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'item-component',
    template: `
    <li>
        <input type="checkbox" 
                [checked]="item.done"/>
        {{ item.title | agupper:'-' }}   
        {{ item.created }}         
        <button (click)="itemClicked.emit(item)" >X</button>      
    </li>
    `
})

export class ItemComponent {

    @Input()
    private item: Item;

    @Output()
    private itemClicked: EventEmitter<Item>;

    constructor() {
        this.itemClicked = new EventEmitter();
    }
}