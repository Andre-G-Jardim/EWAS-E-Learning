import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Metodo } from 'app/interface/metodo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetodosConteudoService {

  private metodosCollection: AngularFirestoreCollection<Metodo>;

  constructor(private afs: AngularFirestore) {
    this.metodosCollection = this.afs.collection<Metodo>('Metodos')
   }

   getMetodos(){
    return this.metodosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        })
      })
    )
   }

   getMetodo(id: string){
    return this.metodosCollection.doc<Metodo>(id).valueChanges();
   }
}
