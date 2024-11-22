import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-photo',
  standalone: true,
  imports: [],
  templateUrl: './profile-photo.component.html',
  styleUrl: './profile-photo.component.scss',
})
export class ProfilePhotoComponent implements OnInit {
  profilePhotoUrl = 'assets/images/vin/profile.png'; // Ruta de la imagen de perfil
  isLoaded = false; // Controla si la imagen ya cargó

  ngOnInit(): void {
    this.preloadImage(this.profilePhotoUrl);
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
