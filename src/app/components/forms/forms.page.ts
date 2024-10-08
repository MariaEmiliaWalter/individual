import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonTitle, IonToast, IonToolbar } from '@ionic/angular/standalone';
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
    ReactiveFormsModule
  ]
})
export class FormsPage implements OnInit {

  title: String = 'Registrarse';
  isToastOpen: boolean = false;
  toastMessage: string = '';
  genericForm!: FormGroup;
  user!: { email: string; password: string; name: string; lastname: string; };
  url!: String;

  constructor(
    protected formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    const state: String = router.routerState.snapshot.url;
    this.url = state.split('/')[1]
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();  
    if (this.authService.isLoggedIn() && this.url != "register") {
      this.title = "Editar usuario"
    }

    if (this.url != 'register') {
      this.genericForm = this.formBuilder.group({
        password: new FormControl(this.user.password, Validators.required),
        name: new FormControl(this.user.name, Validators.required),
        lastname: new FormControl(this.user.name, Validators.required)
      });
    } else {
      this.genericForm = this.formBuilder.group({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required)
      });
    }

  }

  onSubmit() {
    if(this.url == 'register'){
      console.log("registro exitoso")
      this.router.navigateByUrl('')
    }else{
      const formValues = this.genericForm.getRawValue();
      this.authService.updateUser(
        formValues.password,
        formValues.name,
        formValues.lastname); 
        console.log("Update exitoso")
    }
  }

  setToastOpen(bol: boolean) {
    this.isToastOpen = bol
  }

  updateValue(key: string, value: string) {
    this.genericForm.get(key)?.setValue(value);
  }
}
