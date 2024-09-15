import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonThumbnail, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { FormsPage } from 'src/app/components/forms/forms.page';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    FormsPage,IonCard,IonCardContent,IonItem, IonThumbnail,IonLabel,IonImg
   ]
})
export class TabProfilePage implements OnInit {

  img_url : string = "https://docs-demo.ionic.io/assets/madison.jpg";
  
  constructor() { }

  ngOnInit() {
  }

}
