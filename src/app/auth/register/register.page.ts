import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { FormsPage } from 'src/app/components/forms/forms.page';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule, FormsPage ]
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
