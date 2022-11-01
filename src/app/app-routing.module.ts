import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path: 'admin', component:AdminComponent},
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
 