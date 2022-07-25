import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicies/service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerDatos().subscribe(data => {
      console.log(data)
      this.miPortfolio = data
    });
  }

}
