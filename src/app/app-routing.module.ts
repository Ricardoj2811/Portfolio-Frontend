import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
// import { GuardGuard } from './servicies/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent, /*canActivate: [GuardGuard]*/}, //Descomentar cuando tenga el sistema de iniciar sesion activado
  {path:'sign-in', component:SignInComponent},
  {path:'', component:PortfolioComponent}
  // {path:'',redirectTo:'sign-in', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
