import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import {Title, BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor() {

  }

}