import { Component } from '@angular/core';


@Component({
    selector: 'app',
    template:`

        <a [routerLink]="['login']">login</a>
        <a [routerLink]="['todolist']">todolist</a>

        <router-outlet></router-outlet>
    `
})


export class AppComponent {}