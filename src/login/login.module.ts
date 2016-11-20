import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [LoginComponent],
  imports     : [BrowserModule, FormsModule, ReactiveFormsModule],
  exports     : [LoginComponent]
})

export class LoginModule {

}