import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url:string='http://localhost:8080/';

  constructor(private http:HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.url + 'traer/persona/1')
  }
}
