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
  styles: []
})
export class NgxImageCropperComponent implements OnInit, AfterViewInit {

  @Input() height = 350;
  @Input() image = 'assets/image.png';
  @Input() width = 600;
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
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
    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(0,0,0,0.5)';
    this.cropperSettings.cropperDrawSettings.strokeWidth = 1;

    this.data = {};
  }

  ngAfterViewInit() {
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

}
