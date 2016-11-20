import {SharedModule} from "./../shared/shared.module";
import {Todolist} from "./todolist.provider";
import {ItemComponent} from "./item.component";
import {ItemsComponent} from "./items.compoennt";
import {BrowserModule} from "@angular/platform-browser";
import {TodolistComponent} from "./todolist.component";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {IsAdminGuard} from "./admin-guard";

@NgModule({
  declarations: [TodolistComponent, ItemsComponent, ItemComponent],
  providers   : [Todolist, IsAdminGuard],
  imports     : [BrowserModule, SharedModule, HttpModule],
  exports     : [TodolistComponent]
})

export class TodolistModule {

}