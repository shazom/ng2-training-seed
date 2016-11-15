import { TodolistModule } from './../todolist/todolist.module';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports     : [TodolistModule],
  bootstrap   : [AppComponent]
})

export class AppModule {

}