import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicies/service.service';
import { TokenService } from 'src/app/servicies/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  isLogged = false;
  persona: persona = new persona("", "", "", "", "", "", "", "", "");
  miPortfolio: any;

  constructor(private datosPortfolio:PortfolioService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.datosPortfolio.ObtenerDatos().subscribe(data => {
      this.miPortfolio = data
    });

    this.datosPortfolio.getPersona().subscribe(pers => { this.persona = pers })
  }

}
