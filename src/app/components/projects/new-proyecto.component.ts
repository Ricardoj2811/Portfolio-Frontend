import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicies/proyectos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  imagenP : string = '';
  linkP : string = '';

  constructor(private sProyecto: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Proyectos(this.nombreP, this.descripcionP, this.imagenP, this.linkP);
    this.sProyecto.save(edu).subscribe(
      data => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se agrego el nuevo proyecto correctamente",
          icon: "success",
        });
        this.router.navigate(['']);
      }, err =>{
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo agregar el proyecto",
          icon: "error",
      });
        this.router.navigate(['']);
      }
      )
  }

  homePage(){
    this.router.navigate(['']);
  }

}
