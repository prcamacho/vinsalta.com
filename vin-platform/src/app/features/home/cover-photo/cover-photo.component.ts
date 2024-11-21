import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-photo',
  standalone: true,
  imports: [],
  templateUrl: './cover-photo.component.html',
  styleUrl: './cover-photo.component.scss',
})
export class CoverPhotoComponent implements OnInit {
  coverPhotoUrl = 'assets/images/vin/cover.jpg'; // Ruta de la imagen
  isLoaded = false; // Controla si la imagen ya cargó

  ngOnInit(): void {
    this.preloadImage(this.coverPhotoUrl);
  }

  preloadImage(imageUrl: string): void {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      this.isLoaded = true; // Cambia el estado cuando la imagen termina de cargar
    };
    img.onerror = () => {
      console.error('Error al cargar la imagen:', imageUrl);
    };
  }
}
