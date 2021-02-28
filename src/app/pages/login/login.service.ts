import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _usuarioAutenticado = false;

  get usuarioAutenticado(){
    return this._usuarioAutenticado;
  }

  constructor(private afa: AngularFireAuth) { }

  logado(){
    this._usuarioAutenticado = true;
  }

  login(usuario: User){
    return this.afa.signInWithEmailAndPassword(usuario.email, usuario.senha)
  }

  cadastro(usuario: User){
    return this.afa.createUserWithEmailAndPassword(usuario.email, usuario.senha);
  }

  logout(){
    this._usuarioAutenticado = false;
  }

  getAuth(){
    return this.afa.onAuthStateChanged;
  }

}
