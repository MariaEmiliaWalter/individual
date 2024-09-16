import { Component, OnInit } from '@angular/core';
import { IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, NavController } from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { FormsPage } from 'src/app/components/forms/forms.page';
import { ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule, FormsPage, IonBackButton ]
})
export class RegisterPage{

  constructor(
  ) { 
  }


}
