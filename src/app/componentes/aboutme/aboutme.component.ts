import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})

export class AboutMeComponent implements OnInit {
  //inicializo variables de instancias
  aboutme:any;
  

  //inyecto servicio para acceder en la clase a los métodos
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    //almacena en la variable de instancia los datos recuperados
    this.portfolioService.getDatos().subscribe(portfolio =>{

    //definir información a mostrar (lo q puse en el json)

    this.aboutme=portfolio.aboutme;
    
    });
  }

}
