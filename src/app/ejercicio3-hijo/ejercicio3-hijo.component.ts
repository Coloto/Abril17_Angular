import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Asignaturas{
  asignatura: string;
}

@Component({
  selector: 'app-ejercicio3-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3-hijo.component.html',
  styleUrl: './ejercicio3-hijo.component.css'
})
export class Ejercicio3HijoComponent {
  asignaturaSeleccionada: string = '';
  asignaturas: Asignaturas[] =[
    {asignatura: "programación en java"},
    {asignatura: "JSON"},
    {asignatura: "JS"},
    {asignatura: "Python"},
    {asignatura: "Desarrollo de interfaces"},
    {asignatura: "Entornos de desarrollo"},
    {asignatura: "Acceso a datos"}
  ]

  @Output()
  llamadaPadre:EventEmitter<string> = new EventEmitter();

  enviarPadre(asignatura: string){
    this.llamadaPadre.emit(asignatura);
  }
  
}
