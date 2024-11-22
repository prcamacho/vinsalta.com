import { Component } from '@angular/core';
import { CoverPhotoComponent } from "./cover-photo/cover-photo.component";
import { ProfilePhotoComponent } from "./profile-photo/profile-photo.component";
import { PreviewCarouselComponent } from "./preview-carousel/preview-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoverPhotoComponent, ProfilePhotoComponent, PreviewCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
