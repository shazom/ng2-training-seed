import { Todolist } from './../providers/todolist';
import { Item } from './../providers/item';
import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
   selector: 'todolist-list',
   template: `
    <todolist-list-input (itemAdded)="_list.addItem($event)" ></todolist-list-input>
    <todolist-list-items [items]='_list.items' ></todolist-list-items>    
   ` 
})

export class TodolistListComponent {

    private _list: Todolist;

    constructor(list: Todolist){
       this._list = list;            
    }
}