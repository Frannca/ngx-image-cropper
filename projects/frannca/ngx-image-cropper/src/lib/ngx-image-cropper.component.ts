import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  CropperSettings,
  ImageCropperComponent
} from 'ngx-img-cropper';
import {
  NgxImageCropperConfig,
  NgxImageCropperToken
} from './ngx-image-cropper-config';

declare var jQuery: any;

@Component({
  selector: 'lib-ngx-image-cropper',
  templateUrl: 'ngx-image-cropper.component.html',
  styleUrls: ['ngx-image-cropper.component.scss'],
})
export class NgxImageCropperComponent implements OnInit, AfterViewInit {

  @Input() image = null;
  @Input() height: number;
  @Input() width: number;
  @ViewChild('cropper', undefined)

  cropper: ImageCropperComponent;
  noImage = true;
  loading = true;
  active: boolean;
  cropperSettings: CropperSettings;
  data: any;
  template: string;
  ngxImageCropperConfig: NgxImageCropperConfig;

  constructor(
    @Inject(NgxImageCropperToken) token
  ) {
    const defaultConfig = new token.defaults;
    this.ngxImageCropperConfig = { ...defaultConfig, ...token.config };
    this.template = this.ngxImageCropperConfig.template;
  }

  ngOnInit() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = this.width;
    this.cropperSettings.height = this.height;
    this.cropperSettings.croppedWidth = this.width;
    this.cropperSettings.croppedHeight = this.height;
    this.cropperSettings.canvasWidth = this.width;
    this.cropperSettings.canvasHeight = this.height;
    this.cropperSettings.noFileInput = true;
    this.cropperSettings.dynamicSizing = true;
    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(0,0,0,0.5)';
    this.cropperSettings.cropperDrawSettings.strokeWidth = 1;

    this.data = {};

    this.hasImage();
  }

  ngAfterViewInit() {
    const canvas = document.getElementsByTagName('canvas')[0];
    canvas.style.width  = '100%';

    jQuery('.fimage')
      .dimmer({
        on: 'hover'
      })
    ;
  }

  cancel() {
    this.active = false;
    this.hasImage();
    this.cropper.reset();
  }

  crop() {
    this.image = this.data.image;
    this.active = false;
    this.noImage = false;
    this.hasImage();
    this.cropper.reset();
  }

  fileChangeListener($event) {
    this.loading = true;

    const image: any = new Image();
    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = (loadEvent: any) => {
      image.src = myReader.result;
      image.onload = () => {
        that.cropper.setImage(image);
        this.sleep(2000).then(() => {
          this.loading = false;
        });
      };
    };

    myReader.readAsDataURL(file);

    $event.target.type = '';
    $event.target.type = 'file';

    this.active = true;
  }

  hasImage() {
    if (this.noImage === true) {
      this.image = 'assets/upload-picture-flat.svg';
    }
  }

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

}
