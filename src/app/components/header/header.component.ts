import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PortfolioService } from 'src/app/servicies/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  persona: persona = new persona("", "", "");
  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService,private router:Router) { }

  ngOnInit(): void {   
    this.datosPortfolio.ObtenerDatos().subscribe(data => {
      this.miPortfolio = data
    });

    this.datosPortfolio.getPersona().subscribe(pers =>{this.persona = pers})
  }

  login(){
    this.router.navigate(['/sign-in']);
  }

}
