import { ActivatedRoute } from '@angular/router';
import { Item } from '../providers/item';
import { Todolist } from '../providers/todolist';
import { Component } from '@angular/core';

@Component({
    selector: 'todolist',
    template: `
        <todolist-header></todolist-header>
        <todolist-list></todolist-list>
        <todolist-footer></todolist-footer>
    `
})

export class TodolistComponent {

   
    constructor(router: ActivatedRoute) {
        router.queryParams.subscribe( (param => console.log(param)) )

    }

}