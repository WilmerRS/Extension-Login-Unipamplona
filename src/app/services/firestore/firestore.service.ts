import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  getLikes() {
    return this.firestore.collection('likes').snapshotChanges();
  }

  getMyLike(): any {
    const uuid = this.getUUID();
    if (uuid !== '') {
      return this.firestore.collection('likes').doc(uuid).snapshotChanges();
    }
  }

  createUser(uuid: string): void {
    const date = new Date();
    const data = {
      id: uuid,
      lastSession: date,
      date,
    };
    localStorage.setItem('uuid', JSON.stringify(data));
    this.firestore.collection('users').doc(uuid).set(data);
  }

  modifyLastSession(uuid: string): void {
    this.firestore
      .collection('users')
      .doc(uuid)
      .update({ lastSession: new Date() });
  }

  setLike(changeLike: boolean): void {
    // Se agrega un nuevo like al sistema
    const uuid = this.getUUID();
    if (!changeLike && uuid !== '') {
      this.firestore.collection('likes').doc(uuid).set({ like: true });
      return;
    }

    this.firestore.collection('likes').doc(uuid).delete();
  }

  private getUUID(): string {
    const data = localStorage.getItem('uuid');
    if (data) {
      return JSON.parse(data).id;
    }
    return '';
  }
}
