import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { LoginComponent } from './navbar/login/login.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginmodalComponent } from './navbar/login/loginmodal/loginmodal.component';
import { RegistermodalComponent } from './navbar/login/loginmodal/registermodal/registermodal.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';




const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path:'admin', component:AdminComponent},
  {path:'navbar', component:NavbarComponent, children:[
      {path: 'login', component:LoginComponent, children:[
        {path: 'login/loginmodal', component:LoginmodalComponent, children:[
          {path: '/loginmodal/registermodal', component:RegistermodalComponent}
        ]},
      ]},
      {path: './contact', component:ContactComponent},
    ],
  },
  {path:'navbaradmin', component:NavbaradminComponent},
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 