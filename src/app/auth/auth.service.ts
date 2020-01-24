import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { LocalUser } from '../model/user';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<User>; 

  constructor(private afAuth: AngularFireAuth) { 
    this.authState$ = afAuth.authState;
  }

  signUpUser(user: LocalUser) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signInUser(user : LocalUser) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  getAuthState() : Observable<User> {
    return this.authState$;
  }

  getCurrentUser() : User {
    return this.afAuth.auth.currentUser;
  }
}