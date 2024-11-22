import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PreventActionsService } from './core/prevent-actions/prevent-actions.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private preventActionsService: PreventActionsService) {
    // El servicio ya está activado al estar inyectado en el componente
  }
  title = 'vin-platform';
}
