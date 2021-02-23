import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { UrlTree, CanLoad, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private loginService: LoginService, private router: Router){}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if(!this.loginService.usuarioAutenticado){
      this.router.navigateByUrl('/cadastro');
    }
    return this.loginService.usuarioAutenticado;
  }

}
