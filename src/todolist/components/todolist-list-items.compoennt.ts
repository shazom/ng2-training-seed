import { Item } from './../providers/item';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'todolist-list-items',
    template: `
        <ul>        
         <todolist-list-items-item 
              *ngFor='let item of items'
              [item]='item'>
              
        </todolist-list-items-item>
        </ul>
    `
})


export class TodolistListItems {

    @Input()
    public items: Item[];    

} 