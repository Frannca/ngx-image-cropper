import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageCropperComponent } from './ngx-image-cropper.component';

describe('NgxImageCropperComponent', () => {
  let component: NgxImageCropperComponent;
  let fixture: ComponentFixture<NgxImageCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImageCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
