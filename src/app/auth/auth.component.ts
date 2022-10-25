import { ParseSourceFile } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  // styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;
  error: string = null as any;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  //
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe(
      {
        next: (res) => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        error: (errorMessage) => {
          console.log(errorMessage), (this.error = errorMessage);
        },
      }

      // (errorMessage) => {
      //   console.log(errorMessage);
      //   this.error = errorMessage;
      // }
    );

    // form.reset();
  }
}
