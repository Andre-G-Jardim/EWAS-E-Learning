import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { UrlTree, UrlSegment, Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.loginService.getAuth().onAuthStateChanged(user =>{
        if(user) this.router.navigateByUrl('/home');
        resolve(!user ? true : false);
      });
    });
  }

}
