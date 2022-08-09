import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicies/service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerDatos().subscribe(data => {
      console.log(data)
      this.educationList = data.educacion
    });
  }

}
