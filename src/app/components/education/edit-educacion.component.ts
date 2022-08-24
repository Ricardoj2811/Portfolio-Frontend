import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicies/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  edu: Educacion = null;

  constructor(private sEducacion: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data => {
        this.edu = data;
      }, err => {
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo modificar la educación",
          icon: "error",
        });
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.edu).subscribe(
      data => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se actualizo correctamente la educacion",
          icon: "success",
        });
        this.router.navigate(['']);
      }, err => {
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo modificar la educacion",
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
