import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.loginService.getAuth().onAuthStateChanged(user =>{
        if(!user) this.router.navigateByUrl('/cadastro');
        if(user){
          if(user.emailVerified){
            this.router.navigateByUrl('/home');
          }
        }
        resolve(!user.emailVerified ? true : false);
      });
    });
  }

}
