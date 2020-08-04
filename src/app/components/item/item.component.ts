import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { PrincipalService } from 'src/app/service/principal.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() tarea: Tarea;

  constructor(private prSvc: PrincipalService) {
  }

  ngOnInit(): void {
  }

  eliminar (): void{

    this.prSvc.tareas = this.prSvc.tareas.filter(cadaTarea => cadaTarea !== this.tarea);
    this.prSvc.deleteTarea(this.tarea).subscribe((resp) => console.log('RESPONSE', resp));

  }
}
