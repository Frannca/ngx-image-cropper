import { InjectionToken } from '@angular/core';

export const NgxImageCropperToken = new InjectionToken<NgxImageCropperConfig>('NgxImageCropperToken');

export class NgxImageCropperConfig {
  template: string;
  locale: string;
  width: number;
  height: number;
}

export class NgxImageCropperDefaultConfig implements NgxImageCropperConfig {
  template = 'semantic-ui';
  locale = 'en';
  width: 650;
  height: 300;
}
