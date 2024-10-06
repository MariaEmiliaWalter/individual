import { Observable, last, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogged = false;
  private readonly EMAIL: string = "eemi.walter@gmail.com";
  private readonly PASSWORD: string = "12345";
  public user : {
    email: string ;
    password: string;
    name: string;
    lastname: string;
  } = {
    email : "email dummy",
    password: "pass dummy",
    name: "name dummy",
    lastname: "lastname dummy"
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
    this.router.navigateByUrl('auth');
  }

  loggedIn() {
    return this.isLogged == true;
  }
  
  isLoggedIn() {
    return this.isLogged;
  }

  getUser(){
    console.log("entre a getUser")
    console.log(this.isLogged)
    if(this.isLogged){
      this.user.email = "eemi.walter@gmail.com";
      this.user.password = this.PASSWORD; 
    }
    return this.user;  
  }

  updateUser(
    password: string,
    name: string,
    lastname: string
  ){
    this.user = {
      email : this.user.email,
      password: password,
      name: name,
      lastname: lastname
    }
  }
}