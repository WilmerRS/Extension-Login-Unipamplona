import { Injectable } from '@angular/core';
import { UserCreential } from 'src/app/interfaces/user-credential';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CredentialsManagerService {
  credentials: UserCreential[] = [
    {
      username: 'Wilmer',
      password: 'pass',
      date: new Date(2021, 0, 26),
      defaultUser: false,
    },
    {
      username: 'Edwar',
      password: 'pass',
      date: new Date(2021, 1, 26),
      defaultUser: false,
    },
    {
      username: 'Alfredo',
      password: 'pass',
      date: new Date(2021, 1, 26),
      defaultUser: false,
    },
    {
      username: 'Camilo',
      password: 'pass',
      date: new Date(2021, 1, 26),
      defaultUser: false,
    },
    {
      username: 'Yess',
      password: 'pass',
      date: new Date(2021, 1, 26),
      defaultUser: false,
    },
    {
      username: 'Fer',
      password: '2021-02-26',
      date: new Date(2021, 1, 26),
      defaultUser: false,
    },
  ];


  constructor(private firestore: AngularFirestore) {
  }

  getAll(): UserCreential[] {
    return this.credentials;
  }

  public getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }
}
