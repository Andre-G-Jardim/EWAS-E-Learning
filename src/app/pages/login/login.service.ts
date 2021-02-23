import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _usuarioAutenticado = false;

  get usuarioAutenticado(){
    return this._usuarioAutenticado;
  }

  constructor() { }

  login(){
    this._usuarioAutenticado = true;
  }

  logout(){
    this._usuarioAutenticado = false;
  }

}
