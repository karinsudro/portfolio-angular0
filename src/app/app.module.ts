import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortadaComponent } from './portada/portada.component';
import { AboutMeComponent } from './aboutme/aboutme.component';
import { TeachingComponent } from './teaching/teaching.component';
import { DesignComponent } from './design/design.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent} from './navbar/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './navbar/login/login.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { AdminaboutmeComponent } from './adminaboutme/adminaboutme.component';
import { LogoapComponent } from './navbar/logoap/logoap.component';
import { HomeComponent } from './navbar/home/home.component';
import { LinkedinComponent } from './navbar/linkedin/linkedin.component';
import { GithubComponent } from './navbar/github/github.component';
import { LoginmodalComponent } from './navbar/login/loginmodal/loginmodal.component';
import { ContactmodalComponent } from './navbar/contact/contactmodal/contactmodal.component';
import { LogoapadminComponent } from './navbaradmin/logoapadmin/logoapadmin.component';
import { LogoutComponent } from './navbaradmin/logout/logout.component';
import { HomeeadminComponent } from './navbaradmin/homeeadmin/homeeadmin.component';
import { RegistermodalComponent } from './navbar/login/loginmodal/registermodal/registermodal.component';


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
    AdminComponent,
    ErrorComponent,
    IndexComponent,
    LoginComponent,
    NavbaradminComponent,
    AdminaboutmeComponent,
    LogoapComponent,
    HomeComponent,
    LinkedinComponent,
    GithubComponent,
    LoginmodalComponent,
    ContactmodalComponent,
    LogoapadminComponent,
    LogoutComponent,
    HomeeadminComponent,
    RegistermodalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
