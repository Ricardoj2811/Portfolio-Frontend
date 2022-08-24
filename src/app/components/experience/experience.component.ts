import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicies/s-experiencia.service';
import { TokenService } from 'src/app/servicies/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService, httpClient : HttpClient) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { 
      this.expe = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          Swal.fire({
            title: "¡Excelente!",
            text: "Se elimino la experiencia correctamente",
            icon: "success",
          });
          this.cargarExperiencia();
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

