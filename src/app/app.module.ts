import {TodolistModule} from "./../todolist/todolist.module";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginModule} from "../login/login.module";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports     : [TodolistModule, LoginModule, RouterModule.forRoot(routes)],
  bootstrap   : [AppComponent]
})

export class AppModule {

}