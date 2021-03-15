import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Videos } from 'app/interface/videos';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosTemaService {

  private videosCollection: AngularFirestoreCollection<Videos>;

  constructor(private afs: AngularFirestore) {
    this.videosCollection = this.afs.collection<Videos>('Videos')
  }

  getVideos(){
    return this.videosCollection.snapshotChanges().pipe(
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
    return this.videosCollection.doc<Videos>(id).valueChanges();
   }
}
