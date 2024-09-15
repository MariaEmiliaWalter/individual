import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToast, IonToolbar } from '@ionic/angular/standalone';

import { AuthService } from 'src/app/service/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
    ReactiveFormsModule
  ]
})
export class FormsPage implements OnInit {

  title: String = 'Registrarse';
  isToastOpen: boolean = false;
  toastMessage: string = '';
  genericForm!: FormGroup;
  user!: { email: string ; password: string; name: string; lastname: string; };

  constructor(
    protected formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();  //rompe cuando va a buscar el get user.
    if (this.authService.isLoggedIn()) {
      this.title = "Editar usuario"
    }
    this.genericForm = this.formBuilder.group({
      password: new FormControl(this.user.password, Validators.required),
      name: new FormControl(this.user.name, Validators.required),
      lastname: new FormControl(this.user.name, Validators.required),
    });

  }


  onSubmit() {
    const formValues = this.genericForm.getRawValue();
    this.authService.updateUser(
      formValues.password,
      formValues.name,
      formValues.lastname);
    console.log("registro exitoso")
  }

  setToastOpen(bol: boolean) {
    this.isToastOpen = bol
  }
  
  updateValue(key: string ,value: string) {
    this.genericForm.get(key)?.setValue(value);
  }
}
