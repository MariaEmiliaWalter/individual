import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonContent, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonThumbnail, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { AuthService } from 'src/app/service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsPage } from 'src/app/components/forms/forms.page';
import { MediaService } from './../../service/media.service';

@Component({
  selector: 'app-tab-profile',
  templateUrl: './tab-profile.page.html',
  styleUrls: ['./tab-profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    FormsPage,IonCard,IonCardContent,IonItem, IonThumbnail,IonLabel,IonImg, IonInput
   ]
})
export class TabProfilePage implements OnInit {

  img_url! : any

  constructor(
    private mediaService : MediaService
  ) { }

  ngOnInit(): void {
    this.img_url = this.mediaService.getImg();
  }

  async uploadImg(event: any): Promise<any> {
    const file = event.target.files[0]
    await this.mediaService.uploadImg(file);
    this.img_url = this.mediaService.getImg();
    console.log(this.img_url)
  }
  
}
