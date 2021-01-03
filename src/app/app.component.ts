import { Component,OnInit } from '@angular/core';
import {AuthService} from './service/auth.service';


import  {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  email:string;
  password:string;
  data:any={};
  constructor(public authService: AuthService,private _httpclient:HttpClient){
    this.email='';
    this.password='';
  }
ngOnInit(){
 this.getData();
}
getData(){
  console.log("beforecall API");
  return this._httpclient.get("https://us-central1-cours-tp.cloudfunctions.net/helloWorld")
  .subscribe(dataFirestore =>{
    console.log("data", dataFirestore);
    this.data=dataFirestore;
  })
}

  signup(){
    this.authService.signup(this.email,this.password);
    this.email = this.password='';
  }
  
  login(){
    this.authService.signIn(this.email,this.password);
    this.email = this.password='';
    
  }
  logout(){
    this.authService.signOut();
  }

  
  

  

}
