import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'', component:PortfolioComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path:'editedu/:id', component:EditExperienciaComponent},
  {path:'editskill/:id', component:EditExperienciaComponent},
  {path:'editproy/:id', component:EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
