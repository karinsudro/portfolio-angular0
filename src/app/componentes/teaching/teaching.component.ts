import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
    //inicializo variables de instancias
  teaching: any = [];



  constructor(private portfolioservice:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe(portfolio =>{
      
    //definir información a mostrar (lo q puse en el json)
    this.teaching=portfolio.teaching;
  
    });
  }

}
