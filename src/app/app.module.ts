import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IndexComponent } from './components/index/index.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSobreMiComponent } from './components/sobre-mi/edit-sobre-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMiComponent,
    ExperienciaComponent,
    SkillsComponent,
    IndexComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditSobreMiComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
