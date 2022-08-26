import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicies/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {
  per: persona = null;

  constructor(private sPersona: PortfolioService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.per = data;
      }, err => {
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo modificar la persona",
          icon: "error",
        });
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.per).subscribe(
      data => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se actualizo correctamente la persona",
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
