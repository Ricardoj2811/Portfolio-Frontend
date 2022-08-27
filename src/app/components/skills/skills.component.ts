import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicies/skills.service';
import { TokenService } from 'src/app/servicies/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];

  constructor(private sSkills: SkillsService, private tokenService: TokenService, httpClient : HttpClient) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.sSkills.lista().subscribe(data => { 
      this.skills = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.sSkills.delete(id).subscribe(
        data => {
          Swal.fire({
            title: "¡Excelente!",
            text: "Se elimino la skill correctamente",
            icon: "success",
          });
          this.cargarSkills();
        }, err => {
          Swal.fire({
            title: "¡Error!",
            text: "Algo salio mal :( no se pudo borrar la skill",
            icon: "error",
          });
        }
        )
    }
  }
}
