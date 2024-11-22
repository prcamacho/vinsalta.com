// src/app/core/prevent-actions.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreventActionsService {
  constructor() {
    this.disableRightClick();
    this.disableTextSelection();
  }

  // Método para deshabilitar el clic derecho
  private disableRightClick(): void {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault(); // Deshabilita el menú contextual
    });
  }

  // Método para deshabilitar la selección de texto
  private disableTextSelection(): void {
    document.addEventListener('selectstart', (event) => {
      event.preventDefault(); // Deshabilita la selección de texto
    });
  }
}
