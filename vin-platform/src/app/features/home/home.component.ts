import { Component } from '@angular/core';
import { CoverPhotoComponent } from "./cover-photo/cover-photo.component";
import { ProfilePhotoComponent } from "./profile-photo/profile-photo.component";
import { PreviewCarouselComponent } from "./preview-carousel/preview-carousel.component";
import { PricesComponent } from "./prices/prices.component";
import { SocialLinksComponent } from "./social-links/social-links.component";
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoverPhotoComponent, ProfilePhotoComponent, PreviewCarouselComponent, PricesComponent, SocialLinksComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
