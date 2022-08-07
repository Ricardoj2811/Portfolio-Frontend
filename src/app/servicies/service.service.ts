import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="hjbhjebcejc"; //Agregar aqui la url de nuestra API donde esten almacenados todos los datos
  constructor(private http:HttpClient) { }

  ObtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json'); //Cambiar la url de la API del backend
  }
}
