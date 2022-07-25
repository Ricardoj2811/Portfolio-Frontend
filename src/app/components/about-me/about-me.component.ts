import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicies/service.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerDatos().subscribe(data => {
      console.log(data)
      this.miPortfolio = data
    });
  }

}
