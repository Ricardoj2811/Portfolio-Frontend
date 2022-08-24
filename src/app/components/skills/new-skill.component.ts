import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicies/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreSk: string = '';
  percentSk: number = null;
  imagenSk : string = '';

  constructor(private sSkill: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Skills(this.nombreSk, this.imagenSk, this.percentSk);
    this.sSkill.save(edu).subscribe(
      data => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se agrego la nueva skill correctamente",
          icon: "success",
        });
        this.router.navigate(['']);
      }, err =>{
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo agregar la skill",
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
