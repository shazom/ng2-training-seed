import {Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {TodolistComponent} from "../todolist/todolist.component";
import {IsAdminGuard} from "../todolist/admin-guard";

export const routes:Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'list',
    component: TodolistComponent,
    canActivate: [IsAdminGuard],

  }
];