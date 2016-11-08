import { Component, Input } from '@angular/core';

@Component({
    selector: 'login',
    template: `
        <form>
          <input type="text" placeholder="username">
          <input type="password" placeholder="password">
          <button>Login</button>
        </form>
     `
})

export class LoginComponent {}
