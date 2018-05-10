import { TestBed, inject } from '@angular/core/testing';

import { NgxImageCropperService } from './ngx-image-cropper.service';

describe('NgxImageCropperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxImageCropperService]
    });
  });

  it('should be created', inject([NgxImageCropperService], (service: NgxImageCropperService) => {
    expect(service).toBeTruthy();
  }));
});
