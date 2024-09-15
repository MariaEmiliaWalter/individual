import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonThumbnail, IonTitle, IonToast, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    RouterLink,
    IonToast,
    IonInput,
    ReactiveFormsModule,
    IonThumbnail
  ]
})
export class FormsPage implements OnInit {

  title: String = 'Registrarse';
  isToastOpen: boolean = false;
  toastMessage: string = '';
  genericForm!: FormGroup;
  user!: { email: string; password: string; name: string; lastname: string; };

  constructor(
    protected formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
  }

/* 
ERROR: 
vendor.js:69541 ERROR RuntimeError: NG01052: formGroup expects a FormGroup instance. Please pass one in.

      Example:

      
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  }); */

  
  ngOnInit(): void {
    this.user = this.authService.getUser();
    console.log(this.user); //rompe cuando va a buscar el get user.
    if (this.authService.isLoggedIn()) {
      this.title = "Editar usuario"
    }
    this.genericForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log("registro exitoso")
  }

  setToastOpen(bol: boolean) {
    this.isToastOpen = bol
  }

}
