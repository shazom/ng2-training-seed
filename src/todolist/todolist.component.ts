import { Logger } from './../shared/logger';
import { Todolist } from './todolist.provider';
import { Component } from '@angular/core';
import { Item } from './item';

@Component({
    selector: 'todolist',    
    template: `
      <h1>{{ title }}</h1>

        <input #itemInput type="text" [placeholder]="placeholder" />    

        <button (click)="todolist.addItem(itemInput.value)">add</button>

        <items [list]="todolist.items"></items>
    `
})

export class TodolistComponent{

  private title: string;
  private placeholder: string;
  private todolist: Todolist;

  constructor(todolist: Todolist) {    
    this.title = "todolist";
    this.placeholder = "Add item...";
    this.todolist = todolist;        
  }

} 