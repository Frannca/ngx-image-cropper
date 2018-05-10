import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxImageCropperModule } from '../../projects/frannca/ngx-image-cropper/src/lib/ngx-image-cropper.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImageCropperModule.forRoot({
      width: 1028,
      height: 768
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
