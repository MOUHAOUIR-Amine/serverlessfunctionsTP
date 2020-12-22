import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';

import firebase from 'firebase/app'

// then use the full path to get the auth service.


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : Observable<any>;

  constructor(private firebaseAuth : AngularFireAuth) {
    this.user = firebaseAuth.authState;
   }
   signup(email : string, password:string){
     this.firebaseAuth
     .createUserWithEmailAndPassword(email,password)
     .then(value => {
       console.log('Regestration success! ',value);
     })
     .catch(err =>{
      console.log('error ',err.message);
     })
   }
   signIn(email: string, password: string) {
    try {
        if (!email || !password) throw new Error('Invalid email and/or password');
        this.firebaseAuth.signInWithEmailAndPassword(email, password);
        return true;
    } catch (error) {
        console.log('Sign in failed', error);
        return false;
    }
}
// Auth logic to run auth providers
AuthLogin() {
  return this.firebaseAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then((result) => {
      console.log('You have been successfully logged in!')
  }).catch((error) => {
      console.log(error)
  })
}


 signOut() {
  try {
       this.firebaseAuth.signOut();
      return true;
  } catch (error) {
      console.log('Sign out failed', error);
      return false;
  }
}

}
