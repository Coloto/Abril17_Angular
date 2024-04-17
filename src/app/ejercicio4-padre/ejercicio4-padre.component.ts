import { Component } from '@angular/core';
import { Ejercicio4HijoComponent } from '../ejercicio4-hijo/ejercicio4-hijo.component';

interface Usuario{
  nombre: string,
  edad: number
}

@Component({
  selector: 'app-ejercicio4-padre',
  standalone: true,
  imports: [Ejercicio4HijoComponent],
  templateUrl: './ejercicio4-padre.component.html',
  styleUrl: './ejercicio4-padre.component.css'
})
export class Ejercicio4PadreComponent {
  usuarios: Usuario[]=[]

  recibirDato(dato: Usuario[]){
    this.usuarios = dato;
  }

}
