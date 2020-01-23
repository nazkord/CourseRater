import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LocalUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFirestore) { }

  insertLocalUser(userCredential: firebase.auth.UserCredential, newUser: LocalUser) {
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: newUser.email,
      password: newUser.password,
      role: 'user'
    });
  }
}
