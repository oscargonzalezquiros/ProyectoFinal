import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/service/principal.service';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public descripcion: string; //Mantiene la descripcion de la tarea
  public usuario: string;
  public id: string;

  constructor(private tareaSvc: PrincipalService) { }

  ngOnInit(): void {
  }

  // Este metodo se ejecuta cada vez que el usuario hace click en el boton
  procesar(): void {
    // console.log(this.descripcion);
    // UNDEFINED "VALOR" ""

    if (this.descripcion && this.descripcion !== '') {
      console.log(this.descripcion);
      const tarea = new Tarea();
      tarea.usuario = this.usuario;
      tarea.descripcion = this.descripcion;
      tarea.fecha = new Date();
      tarea.estado = 'A';
      this.tareaSvc.tareas.push(tarea);
      console.log(tarea);
      this.tareaSvc.addTarea(tarea).subscribe((resp) => console.log('RESPONSE', resp));
    }

  }
}
