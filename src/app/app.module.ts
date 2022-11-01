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
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './navbar/login/login.component';
import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';
import { LogoapComponent } from './navbar/logoap/logoap.component';
import { HomeComponent } from './navbar/home/home.component';
import { LinkedinComponent } from './navbar/linkedin/linkedin.component';
import { GithubComponent } from './navbar/github/github.component';
import { LogoapadminComponent } from './navbaradmin/logoapadmin/logoapadmin.component';
import { LogoutComponent } from './navbaradmin/logout/logout.component';
import { HomeeadminComponent } from './navbaradmin/homeeadmin/homeeadmin.component';
import { LoginmodallComponent } from './navbar/loginmodall/loginmodall.component';
import { ContactmodallComponent } from './navbar/contactmodall/contactmodall.component';
import { RegistermodallComponent } from './navbar/registermodall/registermodall.component';
import { AdminComponent } from './admin/admin.component';


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
    LoginmodallComponent,
    ContactmodallComponent,
    RegistermodallComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
