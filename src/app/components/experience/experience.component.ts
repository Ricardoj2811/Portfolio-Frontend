import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicies/service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienciaList:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerDatos().subscribe(data => {
      this.experienciaList = data.experiencia;
    });
  }

}
