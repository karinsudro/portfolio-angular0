import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ErrorComponent } from './componentes/error/error.component';
import { IndexComponent } from './componentes/index/index.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NavbaradminComponent } from './componentes/navbaradmin/navbaradmin.component';
import { AadminComponent } from './componentes/aadmin/aadmin.component';



const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path: 'aadmin', component:AadminComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'navbaradmin', component:NavbaradminComponent},
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 