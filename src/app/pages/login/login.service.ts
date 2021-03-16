import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'app/interface/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _usuarioAutenticado = false;

  private userCollection: AngularFirestoreCollection<User>;

  get usuarioAutenticado(){
    return this._usuarioAutenticado;
  }

  constructor(private afa: AngularFireAuth, private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<User>('Usuarios');
  }

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

  redefinirSenha(usuario: User){
    return this.afa.sendPasswordResetEmail(usuario.email);
  }

  getIdUser(id: string){
    return this.userCollection.doc<User>(id).snapshotChanges().pipe(
      map(a => {
        if(a.payload.exists){
          const data = a.payload.data();
          const payloadId = a.payload.id;
          return {id: payloadId, ...data};
        }
      })
    )
  }

}
