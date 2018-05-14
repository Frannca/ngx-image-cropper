import { InjectionToken } from '@angular/core';

export const NgxImageCropperToken = new InjectionToken<NgxImageCropperConfig>('NgxImageCropperToken');

export class NgxImageCropperConfig {
  template: string;
  locale: string;
}

export class NgxImageCropperDefaultConfig implements NgxImageCropperConfig {
  template = 'semantic-ui';
  locale = 'en';
}
