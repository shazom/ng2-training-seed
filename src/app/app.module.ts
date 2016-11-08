import { DangerDirective } from './../todolist/directives/danger.directive';
import { routes } from './routes';
import { AppComponent } from './app.component';
import { LoginModule } from './../login/login.module';
import { LoginComponent } from './../login/login.component';
import { TodolistComponent } from './../todolist/components/todolist.component';
import { TodoListModule } from './../todolist/todolist.module';
import { NgModule } from "@angular/core";
import { Title } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [TodoListModule, LoginModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(title: Title) {
    title.setTitle('new title')
  }

}