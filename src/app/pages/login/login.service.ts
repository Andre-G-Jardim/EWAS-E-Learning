import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
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
    return this.afa.signOut();
  }

  getAuth(){
    return this.afa;
  }

}
