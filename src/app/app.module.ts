import { TodolistComponent } from './../todolist/components/todolist.component';
import { TodoListModule } from './../todolist/todolist.module';
import {NgModule} from "@angular/core";

@NgModule({
  imports  : [TodoListModule],
  bootstrap: [TodolistComponent]
})

export class AppModule {

  constructor() {
  }

}