import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicies/s-experiencia.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE : string = '';
  nombreEmpresaE : string = '';
  fechaInicioE : string = '';
  fechaFinalE: string = '';
  imagen : string = '';
  link: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.nombreEmpresaE, this.fechaInicioE, this.fechaFinalE, this.imagen, this.link);
    this.sExperiencia.save(expe).subscribe(
      data => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se agrego la nueva experiencia correctamente",
          icon: "success",
        });
        this.router.navigate(['']);
      }, err =>{
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo agregar la experiencia",
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
