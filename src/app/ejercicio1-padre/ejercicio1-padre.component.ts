import { Component } from '@angular/core';
import { Ejercicio1HijoComponent } from '../ejercicio1-hijo/ejercicio1-hijo.component';

@Component({
  selector: 'app-ejercicio1-padre',
  standalone: true,
  imports: [Ejercicio1HijoComponent],
  templateUrl: './ejercicio1-padre.component.html',
  styleUrl: './ejercicio1-padre.component.css'
})
export class Ejercicio1PadreComponent {
  mensaje: string = "Hola que tal!";
}
