import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { ImageCropperModule } from 'ngx-img-cropper';
import {
  NgxImageCropperConfig,
  NgxImageCropperDefaultConfig,
  NgxImageCropperToken
} from './ngx-image-cropper-config';
import { NgxImageCropperComponent } from './ngx-image-cropper.component';
import { NgxImageCropperService } from './ngx-image-cropper.service';

@NgModule({
  imports: [
    CommonModule,
    ImageCropperModule
  ],
  declarations: [NgxImageCropperComponent],
  exports: [NgxImageCropperComponent]
})
export class NgxImageCropperModule {

  constructor (@Optional() @SkipSelf() parentModule: NgxImageCropperModule) {
    if (parentModule) {
      throw new Error(
        'NgxImageCropper is already loaded.');
    }
  }

  static forRoot(config: Partial<NgxImageCropperConfig> = {}): ModuleWithProviders {
    return {
      ngModule: NgxImageCropperModule,
      providers: [
        NgxImageCropperService,
        { provide: NgxImageCropperToken, useValue: { config, defaults: NgxImageCropperDefaultConfig} }
      ]
    };
  }
}
