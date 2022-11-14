import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  //inicializo variables de instancias
design: any = [];



constructor(private portfolioservice:PortfolioService) { }

ngOnInit(): void {
  this.portfolioservice.getDatos().subscribe(portfolio =>{
    
  //definir información a mostrar (lo q puse en el json)
  this.design=portfolio.design;

  });
}

}