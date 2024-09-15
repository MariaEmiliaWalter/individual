import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToast,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
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
    ReactiveFormsModule
  ]
})
export class LoginPage implements OnInit {
  isToastOpen: boolean = false;
  toastMessage: string = '';
  loginForm!: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    //private toastCtrl : ToastController
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      //'email': new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    const formValues = this.loginForm.getRawValue();
    this.authService.login(formValues.email!, formValues.password!)
      .subscribe({
        next: (resp) => {
          console.log(resp)
          if (resp.valueOf()) {
            this.router.navigateByUrl('');
          }else{
            this.isToastOpen = true;
            this.toastMessage = 'Datos ingresados incorrectos'
          }
        }
      });
  }

  setToastOpen(bol : boolean){
    this.isToastOpen = bol
  }


}
