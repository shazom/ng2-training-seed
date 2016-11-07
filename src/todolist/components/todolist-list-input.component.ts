import { TodolistListItems } from './todolist-list-items.compoennt';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'todolist-list-input',
    template: `
        <input #itemBox 
               (keydown.enter)="itemAdded.emit(itemBox.value)" 
               type='type' 
               placeholder="text" />

        <!-- <button (click)="itemAdded.emit(itemBox.value)" >add</button> -->                          
    `
})

export class TodolistListInput {

    @Output()
    private itemAdded: EventEmitter<string>;

    constructor(){
        this.itemAdded = new EventEmitter<string>();
    }

    

    


}