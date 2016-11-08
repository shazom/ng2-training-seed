import { FormComponent } from './form.component';
import { InfoComponent } from './info.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [LoginComponent, InfoComponent, FormComponent],
    imports: [BrowserModule],
    exports: [LoginComponent]
})


export class LoginModule {

}