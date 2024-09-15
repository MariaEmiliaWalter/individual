import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { AuthService } from 'src/app/service/auth.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    IonButton,IonIcon
  ]
})
export class TabHomePage implements OnInit {

  constructor(
    private authService: AuthService,
  ) {
    addIcons({close});
   }
   
  ngOnInit() {}

  logout(){
    this.authService.logout();
  }
}
