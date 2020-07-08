import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/service/principal.service';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public descripcion: string; // mantiene la descripcion de la tarea
  constructor(private tareaSvc: PrincipalService) { }

  ngOnInit(): void {
  }

  procesar(): void{
    
    if (this.descripcion  && this.descripcion !== '') {
      console.log(this.descripcion);
      const tarea = new Tarea();
      tarea.descripcion = this.descripcion;
      console.log(this.descripcion);
      this.tareaSvc.tareas.push(tarea);
     
    }
 
  }
}
