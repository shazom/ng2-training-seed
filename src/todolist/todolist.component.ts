import {Todolist} from "./todolist.provider";
import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  template: `
      <h1>{{ title }} hello {{ name }}</h1>

        <input #itemInput type="text" [placeholder]="placeholder" />    

        <button (click)="todolist.addItem(itemInput.value)">add</button>

        <items [list]="items"></items>
    `
})

export class TodolistComponent {

  private title: string;
  private placeholder: string;
  private todolist: Todolist;
  private items: any[];
  private server: Http;
  private name: string;

  constructor(todolist: Todolist, server: Http, route: ActivatedRoute) {
    this.title       = "todolist";
    this.placeholder = "Add item...";
    this.todolist    = todolist;
    this.server      = server;
    this.items       = [];

    route.queryParams.subscribe( param => this.name = param.name)

  }

} 