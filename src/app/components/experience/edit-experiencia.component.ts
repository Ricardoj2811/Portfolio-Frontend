import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/servicies/s-experiencia.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo modificar la experiencia",
          icon: "error",
        });
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se actualizo correctamente la experiencia",
          icon: "success",
        });
        this.router.navigate(['']);
      }, err => {
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo modificar la experiencia",
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
