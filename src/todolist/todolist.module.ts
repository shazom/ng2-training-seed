import { Storage } from './providers/storage';
import { Todolist } from './providers/todolist';
import { TodolistFooterClearButtonsComponent } from './components/todolist-footer-clear-buttons.compoennt';
import { TodolistListInput } from './components/todolist-list-input.component';
import { BrowserModule } from '@angular/platform-browser';
import { TodolistListItemsItemComponent } from './components/todolist-list-items-item.component';
import { TodolistListItems } from './components/todolist-list-items.compoennt';
import { TodolistListComponent } from './components/todolist-list.component';
import { TodolistFooterCounterComponent } from './components/todolist-footer-counter.component.1';
import { TodolistFooterComponent } from './components/todolist-footer.component';
import { TodolistHeaderComponent } from './components/todolist-header.component';
import { TodolistComponent } from './components/todolist.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[
        TodolistComponent,
        TodolistHeaderComponent,
        TodolistFooterComponent,
        TodolistListComponent,
        TodolistListInput,
        TodolistListItems,
        TodolistListItemsItemComponent,
        TodolistFooterCounterComponent,
        TodolistFooterClearButtonsComponent
    ],
    providers: [Todolist, Storage],
    imports: [BrowserModule],    
    exports: [TodolistComponent]
})

export class TodoListModule {

}