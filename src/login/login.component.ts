import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {StringValidators} from "./string.validators";

@Component({
  template: `
    <h2>Login</h2>
    <form [formGroup]="loginForm" (ngSubmit)="login()">
    
      <input type="text"         
             formControlName="username"
             placeholder="username">
             
             
                               
      <input type="password"
             formControlName="password"
             placeholder="password">
      
      <button>Login</button>
      
    </form>
  `
})
export class LoginComponent {

  private loginForm: FormGroup;
  private username: FormControl;
  private password: FormControl;

  constructor() {
    this.username = new FormControl('', Validators.compose([
      Validators.required,
      StringValidators.noSpace,
    ]), StringValidators.isUnique);

    this.password = new FormControl('', Validators.required);

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  public login() {
    console.log(`loginForm valid: ${this.loginForm.valid}`);
  }


}