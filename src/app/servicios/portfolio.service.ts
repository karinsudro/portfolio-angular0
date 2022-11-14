//para hacer peticiones: mini servidor local
import { HttpClient } from '@angular/common/http';
//para suscribirse y recibir respuesta asincrónica
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})


export class PortfolioService {

  //http es el alias
  constructor(private http:HttpClient) { }

  //método observable que devuelve los datos
  getDatos():Observable<any>{
    //llama al json con su ruta q es local o se pone URL entre los paréntesis para traer los datos de un json online
    return this.http.get('./assets/json/data.json');
  }
}
