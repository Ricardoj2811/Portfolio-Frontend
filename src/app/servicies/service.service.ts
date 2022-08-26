import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string='http://localhost:8080/';
  
  constructor(private http:HttpClient) { }

  ObtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json'); //Cambiar la url de la API del backend
  }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.url + 'traer/persona/1')
  }

  public update(id: number, persona: persona): Observable<any>{
    return this.http.put<any>(this.url + `update/${id}`, persona);
  }

  public detail(id: number): Observable<persona>{
    return this.http.get<persona>(this.url + `detail/${id}`);
  }
}
