import { Component } from '@angular/core';

@Component({
  selector: 'vin-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  isOpen = true;

  closeModal() {
    this.isOpen = false;
  }

  acceptPromo() {
    // Aquí puedes agregar lógica adicional, como guardar en localStorage
    console.log('Promoción aceptada');
    this.closeModal();
  }
}
