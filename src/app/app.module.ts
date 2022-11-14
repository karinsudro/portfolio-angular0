import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


//import { PortfolioService } from './servicios/portfolio.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { AboutMeComponent } from './componentes/aboutme/aboutme.component';
import { TeachingComponent } from './componentes/teaching/teaching.component';
import { DesignComponent } from './componentes/design/design.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ContactComponent} from './componentes/navbar/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';  
import { ProjectsComponent } from './componentes/projects/projects.component';
import { ErrorComponent } from './componentes/error/error.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/navbar/login/login.component';
import { NavbaradminComponent } from './componentes/navbaradmin/navbaradmin.component';
import { LogoapComponent } from './componentes/navbar/logoap/logoap.component';
import { HomeComponent } from './componentes/navbar/home/home.component';
import { LinkedinComponent } from './componentes/navbar/linkedin/linkedin.component';
import { GithubComponent } from './componentes/navbar/github/github.component';
import { LogoapadminComponent } from './componentes/navbaradmin/logoapadmin/logoapadmin.component';
import { LogoutComponent } from './componentes/navbaradmin/logout/logout.component';
import { HomeeadminComponent } from './componentes/navbaradmin/homeeadmin/homeeadmin.component';
import { ContactmodallComponent } from './componentes/navbar/contactmodall/contactmodall.component';
import { AadminComponent } from './componentes/aadmin/aadmin.component';
import { ModalloginComponent } from './componentes/modals/modallogin/modallogin.component';
import { ModalredesComponent } from './componentes/modals/modalredes/modalredes.component';
import { ModalportadaComponent } from './componentes/modals/modalportada/modalportada.component';
import { ModalregisterComponent } from './componentes/modals/modalregister/modalregister.component';
import { ModalteachingComponent } from './componentes/modals/modalteaching/modalteaching.component';
import { ModalaboutmeComponent } from './componentes/modals/modalaboutme/modalaboutme.component';
import { ModalcontactmeComponent } from './componentes/modals/modalcontactme/modalcontactme.component';
import { ModaldesignComponent } from './componentes/modals/modaldesign/modaldesign.component';
import { ModaleducationComponent } from './componentes/modals/modaleducation/modaleducation.component';
import { ModalskillsComponent } from './componentes/modals/modalskills/modalskills.component';
import { ModalprojectsComponent } from './componentes/modals/modalprojects/modalprojects.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortadaComponent,
    AboutMeComponent,
    TeachingComponent,
    DesignComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,
    ErrorComponent,
    IndexComponent,
    LoginComponent,
    NavbaradminComponent,
    LogoapComponent,
    HomeComponent,
    LinkedinComponent,
    GithubComponent,
    LogoapadminComponent,
    LogoutComponent,
    HomeeadminComponent,
    ContactmodallComponent,
    AadminComponent,
    ModalloginComponent,
    ModalredesComponent,
    ModalportadaComponent,
    ModalregisterComponent,
    ModalteachingComponent,
    ModalaboutmeComponent,
    ModalcontactmeComponent,
    ModaldesignComponent,
    ModaleducationComponent,
    ModalskillsComponent,
    ModalprojectsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],  //PortfolioService
  bootstrap: [AppComponent]
})
export class AppModule { }
