import { TodolistComponent } from './../todolist/components/todolist.component';
import { LoginComponent } from './../login/login.component';

export const routes =[
    { path: '', redirectTo: 'login', pathMatch:'full' },    
    { path: 'login', component: LoginComponent},
    { path: 'todolist', component: TodolistComponent }
];