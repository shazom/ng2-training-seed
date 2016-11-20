import {Component} from "@angular/core";

@Component({
  selector: 'app',
  template: `
     <a [routerLink]="['login']">login</a>
     <a [routerLink]="['list']">list</a>
     
     <router-outlet name="mainSection"></router-outlet>
    `
})

export class AppComponent {}
