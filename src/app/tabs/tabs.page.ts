import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { homeOutline, personCircleOutline } from 'ionicons/icons';

import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() { 
    addIcons({homeOutline,personCircleOutline});
  }

  // ionViewDidLoad() {
  //   console.log('Hello Tabs Page');
  // }
}
