import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicies/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proy: Proyectos = null;
  constructor(private sProyecto: ProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data => {
        this.proy = data;
      }, err => {
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo modificar el proyecto",
          icon: "error",
        });
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proy).subscribe(
      data => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se actualizo correctamente el proyecto",
          icon: "success",
        });
        this.router.navigate(['']);
      }, err => {
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo modificar el proyecto",
          icon: "error",
        });
        this.router.navigate(['']);
      }
    )
  }

  homePage() {
    this.router.navigate(['']);
  }

}
