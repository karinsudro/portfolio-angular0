import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any;

  constructor(private portfolioservice:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioservice.getDatos().subscribe(portfolio =>{

      //inicializa variable skills (lo q puse en el json)
      this.projects=portfolio.projects;
      });
  }


}
