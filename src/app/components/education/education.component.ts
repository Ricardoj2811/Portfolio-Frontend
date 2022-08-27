import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicies/educacion.service';
import { TokenService } from 'src/app/servicies/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  edu: Educacion[] = [];

  constructor(private sEducacion: EducacionService, private tokenService: TokenService, httpClient : HttpClient) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(data => { 
      this.edu = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          Swal.fire({
            title: "¡Excelente!",
            text: "Se elimino la educación correctamente",
            icon: "success",
          });
          this.cargarEducacion();
        }, err => {
          Swal.fire({
            title: "¡Error!",
            text: "Algo salio mal :( no se pudo borrar la educación",
            icon: "error",
          });
        }
        )
    }
  }

}
