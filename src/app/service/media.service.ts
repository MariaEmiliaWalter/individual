import { Injectable, OnInit } from "@angular/core";

import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root',
})
export class MediaService {

    constructor(private sanitizer: DomSanitizer) { }

    img_previsualizacion: string = "https://docs-demo.ionic.io/assets/madison.jpg";

    getImg() {
        return this.img_previsualizacion
    }

    uploadImg(file: any): any {
        this.extraerBase64(file).then((img: any) => {
            this.img_previsualizacion = img.base;
        })
        console.log(this.img_previsualizacion)
        return this.img_previsualizacion;
    }

    extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
            try {
                const unsafeImg = window.URL.createObjectURL($event);
                const img = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                const reader = new FileReader();
                reader.readAsDataURL($event);
                reader.onload = () => {
                    resolve({
                        blob: $event,
                        img,
                        base: reader.result
                    })
                };              
                reader.onerror = error => {
                    resolve({
                        blob: $event,
                        img,
                        base: null
                    })
                }
            } catch (e) {
                console.log(e)
            }
        })
}
