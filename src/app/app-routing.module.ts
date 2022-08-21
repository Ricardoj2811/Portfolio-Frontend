import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'', component:PortfolioComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
