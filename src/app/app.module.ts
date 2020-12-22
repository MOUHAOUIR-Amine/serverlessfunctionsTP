import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireStorageModule} from '@angular/fire/storage';

import {AuthService} from './service/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{firebase} from '../environments/fi'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,

    AngularFireMessagingModule,
    AngularFireStorageModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [    AngularFirestore,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
