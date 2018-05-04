import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-img-cropper';
import { NgxImageCropperComponent } from './ngx-image-cropper.component';

@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule
  ],
  declarations: [NgxImageCropperComponent],
  exports: [NgxImageCropperComponent]
})
export class NgxImageCropperModule { }
