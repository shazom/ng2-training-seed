import {TodolistModule} from "./../todolist/todolist.module";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginModule} from "../login/login.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [TodolistModule, LoginModule],
  bootstrap   : [AppComponent]
})

export class AppModule {

}