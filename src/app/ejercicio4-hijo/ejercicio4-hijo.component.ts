import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario{
  nombre: string,
  edad: number
}

@Component({
  selector: 'app-ejercicio4-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio4-hijo.component.html',
  styleUrl: './ejercicio4-hijo.component.css'
})
export class Ejercicio4HijoComponent {
  inputNombre:string='';
  inputEdad:number=0;

  usuarios: Usuario[] = []
  
  @Output()
  llamadaPadre:EventEmitter<Usuario[]> = new EventEmitter();

  agregarUsuario(inputNombre:string, inputEdad:number){
    this.usuarios.push({
      nombre: inputNombre, 
      edad: inputEdad
    })
    this.llamadaPadre.emit(this.usuarios);
  }

  eliminarUsuario(){
    this.usuarios.pop();
    this.llamadaPadre.emit(this.usuarios);
  }
}
