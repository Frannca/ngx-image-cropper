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
    NgxImageCropperModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
