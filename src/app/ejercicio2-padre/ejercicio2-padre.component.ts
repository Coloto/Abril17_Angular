import { Component } from '@angular/core';
import { Ejercicio2HijoComponent } from '../ejercicio2-hijo/ejercicio2-hijo.component';

interface Cesta {
  producto: string;
}

@Component({
  selector: 'app-ejercicio2-padre',
  standalone: true,
  imports: [Ejercicio2HijoComponent],
  templateUrl: './ejercicio2-padre.component.html',
  styleUrl: './ejercicio2-padre.component.css'
})
export class Ejercicio2PadreComponent {
  cesta: Cesta[] = [
    {producto: "Pan"},
    {producto: "Café"}
  ];
  
  recibirDato(dato:string) {
    this.cesta.push({producto: dato})
  }
}
