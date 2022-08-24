import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicies/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skills = null;
  constructor(private sSkill: SkillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo modificar la skill",
          icon: "error",
        });
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.update(id, this.skill).subscribe(
      data => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Se actualizo correctamente la skill",
          icon: "success",
        });
        this.router.navigate(['']);
      }, err => {
        Swal.fire({
          title: "¡Error!",
          text: "Algo salio mal :( no se pudo modificar la skill",
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
