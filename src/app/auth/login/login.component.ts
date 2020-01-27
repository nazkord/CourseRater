import { Component, OnInit } from '@angular/core';
import { LocalUser } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: LocalUser = {
    id: null,
    email: null,
    password: null
  };
  authError: any;
  authSuccess: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  logUser() {
    this.authService.signInUser(this.user)
      .then(() => {
        this.router.navigate(['/course-list-filter']);
      })
      .catch(error => {
        this.authSuccess = null;
        this.authError = error;
    });
  }

  registerUser() {
    this.authService.signUpUser(this.user)
      .then(() => {
        this.authSuccess = "Account created. Please sign in";
      })
      .catch(error => {
        this.authSuccess = null;
        this.authError = error;
    })
}
}
