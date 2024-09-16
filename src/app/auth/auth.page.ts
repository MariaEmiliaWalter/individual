import { Component, OnInit } from '@angular/core';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login/login.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonLabel, IonButton,IonGrid, IonRow, IonCol, LoginPage]
})
export class AuthPage {

  constructor(private router: Router) { }
 
  navigateToRegister(){
    this.router.navigateByUrl("register");
  }
}
