import {SharedModule} from "./../shared/shared.module";
import {Todolist} from "./todolist.provider";
import {ItemComponent} from "./item.component";
import {ItemsComponent} from "./items.compoennt";
import {BrowserModule} from "@angular/platform-browser";
import {TodolistComponent} from "./todolist.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [TodolistComponent, ItemsComponent, ItemComponent],
  providers   : [Todolist],
  imports     : [BrowserModule, SharedModule],
  exports     : [TodolistComponent]
})

export class TodolistModule {

}