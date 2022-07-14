import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicies/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.ObtenerDatos().subscribe(data => {
      console.log(data)
      this.miPortfolio = data
    });
  }

}
