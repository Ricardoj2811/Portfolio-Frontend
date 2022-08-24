import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicies/proyectos.service';
import { PortfolioService } from 'src/app/servicies/service.service';
import { TokenService } from 'src/app/servicies/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proy: Proyectos[] = [];

  constructor(private sProyectos: ProyectosService, private tokenService: TokenService, httpClient : HttpClient) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(data => { 
      this.proy = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyectos.delete(id).subscribe(
        data => {
          Swal.fire({
            title: "¡Excelente!",
            text: "Se elimino la experiencia correctamente",
            icon: "success",
          });
          this.cargarProyectos();
        }, err => {
          Swal.fire({
            title: "¡Error!",
            text: "Algo salio mal :( no se pudo borrar la experiencia",
            icon: "error",
          });
        }
        )
    }
  }

}
