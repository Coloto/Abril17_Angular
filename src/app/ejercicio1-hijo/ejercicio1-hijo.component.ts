import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejercicio1-hijo',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1-hijo.component.html',
  styleUrl: './ejercicio1-hijo.component.css'
})
export class Ejercicio1HijoComponent {
  @Input() mensajeParaHijo: string='';
}
