import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  CropperSettings,
  ImageCropperComponent
} from 'ngx-img-cropper';

declare var jQuery: any;

@Component({
  selector: 'lib-ngx-image-cropper',
  templateUrl: 'ngx-image-cropper.component.html',
  styleUrls: ['ngx-image-cropper.component.scss'],
})
export class NgxImageCropperComponent implements OnInit, AfterViewInit {

  @Input() image = null;
  @Input() height = 350;
  @Input() width = 600;
  @ViewChild('cropper', undefined)

  cropper: ImageCropperComponent;
  noImage = false;
  loading = true;
  active: boolean;
  cropperSettings: CropperSettings;
  data: any;
  template = 'semantic-ui';

  constructor() {
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
  }

  fileChangeListener($event) {
    this.loading = true;
    this.cropper.reset();

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

    this.active = true;
  }

  crop() {
    this.image = this.data.image;
    this.active = false;
  }

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  hasImage() {
    if (!this.image) {
      this.image = 'assets/upload-picture-flat.svg';
      this.noImage = true;
    }
  }

}
