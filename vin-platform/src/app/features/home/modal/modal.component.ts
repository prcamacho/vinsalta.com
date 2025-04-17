import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'vin-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  isOpen = true;

  @ViewChild('modalVideo') modalVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    // Esto fuerza el autoplay
    if (this.modalVideo) {
      const video = this.modalVideo.nativeElement;
      video.muted = true;
      video.play().catch((err) => {
        console.warn('Autoplay bloqueado por el navegador:', err);
      });
    }
  }

  closeModal() {
    this.isOpen = false;
  }

  acceptPromo() {
    // Aquí puedes agregar lógica adicional, como guardar en localStorage
    console.log('Promoción aceptada');
    this.closeModal();
  }
}
