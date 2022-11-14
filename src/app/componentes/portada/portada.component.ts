import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service'; 

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  //crear (inicializar) variables de instancia para guardar los datos con los que trata el servicio. SOn todos los datos que tenga q mostrar.
  //se pone el nombre q asigné en el apartado del json. Reepetir en cada .ts de componentes
  portada:any;


  //inyectar servicio para tener acceso en la clase a los métodos
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    //almacena en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio =>{
      //console.log(portfolio),
    //definir información a mostrar (lo q puse en el json)

    this.portada = portfolio.portada;

    });
  }

}
