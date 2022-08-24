import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService} from 'src/app/servicies/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd: string = '';
  descripcionEd: string = '';
  nombreInstitutoEd : string = '';
  fechaInicioEd : string = '';
  fechaFinalEd: string = '';
  imagenEd : string = '';
  linkEd: string = '';
  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombreEd, this.descripcionEd, this.nombreInstitutoEd, this.fechaInicioEd, this.fechaFinalEd, this.imagenEd, this.linkEd);
    this.sEducacion.save(edu).subscribe(
      data => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se agrego la nueva educación correctamente",
          icon: "success",
        });
        this.router.navigate(['']);
      }, err =>{
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo agregar la educación",
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
