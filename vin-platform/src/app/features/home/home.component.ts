import { Component } from '@angular/core';
import { CoverPhotoComponent } from "./cover-photo/cover-photo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CoverPhotoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
