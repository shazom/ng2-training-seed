import { Item } from './../todolist/item';
import { TodolistModule } from './../todolist/todolist.module';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {Config} from './app.constants'


@NgModule({
  declarations: [AppComponent],  
  imports     : [TodolistModule],
  bootstrap   : [AppComponent]
})

export class AppModule {

}