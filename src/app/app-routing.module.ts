import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  {path: '' , component: IndexComponent},
  {path: 'header' , component: HeaderComponent},
  {path: 'sobremi' , component: SobreMiComponent},
  {path: 'experiencia' , component: ExperienciaComponent},
  {path: 'skills' , component: SkillsComponent},
  {path: 'proyectos' , component: ProyectosComponent},
  {path: 'footer' , component: FooterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
