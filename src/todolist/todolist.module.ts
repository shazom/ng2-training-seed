import { SharedModule } from './../shared/shared.module';
import { Todolist } from './todolist.provider';
import { ItemComponent } from './item.component';
import { ItemsComponent } from './items.compoennt';
import { BrowserModule } from '@angular/platform-browser';
import { TodolistComponent } from './todolist.component';
import { NgModule } from '@angular/core';
import {Item} from './item'

@NgModule({
    declarations: [TodolistComponent, ItemsComponent, ItemComponent],
    providers: [Todolist],    
    imports: [BrowserModule, SharedModule],
    exports: [TodolistComponent]
})

export class TodolistModule {

}