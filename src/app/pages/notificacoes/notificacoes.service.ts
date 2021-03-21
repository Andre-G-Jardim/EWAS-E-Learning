import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Notificacao } from 'app/interface/notificacao'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NotificacoesService {

  private notificacaoCollection: AngularFirestoreCollection<Notificacao>;

  constructor(private afs: AngularFirestore) {
    this.notificacaoCollection = this.afs.collection<Notificacao>('Notificacao')
  }

  getNotificacao() {
    return this.notificacaoCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  }
  

}
