//Descomentar cuando tenga el sistema de iniciar sesion activado

// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthenticationService } from './authentication.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class GuardGuard implements CanActivate {
//   constructor(private authenticationService: AuthenticationService, private rutas: Router){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       let currentUser = this.authenticationService.UsuarioAutenticado
//       if(currentUser && currentUser.accessToken){
//         return true;
//       }
//       else{
//         this.rutas.navigate(['/sign-in']);
//         return false;
//       }
      
//   }
  
// }
