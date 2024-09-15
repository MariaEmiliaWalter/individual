import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged = false;
  private readonly EMAIL: string = "eemi.walter@gmail.com";
  private readonly PASSWORD: string = "12345";
  public user! : {
    email: string ;
    password: string;
    name: string;
    lastname: string;
  };

  constructor(private router: Router){ }

  login(email: string, password: string) : Observable <boolean> {
    if (email == this.EMAIL && password == this.PASSWORD) {
        this.isLogged = true;    
    }
    console.log(email)   
    return of(this.isLogged)
  }

  logout() {
    this.isLogged = false;
    this.router.navigateByUrl('');
  }

  loggedIn() {
    return this.isLogged == true;
  }
  
  isLoggedIn() {
    return this.isLogged;
  }

  getUser(){
    if(this.isLogged){
      this.user.email = this.EMAIL
      this.user.password = this.PASSWORD; 
      this.user.name = "";
      this.user.lastname = "";    
    }else{
      this.user.email = "";
      this.user.password = "";    
      this.user.name = "";
      this.user.lastname = "";    
    }
    return this.user;  
  }
}