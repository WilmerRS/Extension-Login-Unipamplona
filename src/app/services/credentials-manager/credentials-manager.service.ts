import { UserData } from 'src/app/interfaces/user-data';
import { Injectable } from '@angular/core';
import { UserCreential } from 'src/app/interfaces/user-credential';
import { AngularFirestore } from '@angular/fire/firestore';


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

  // biri = require('biri');

  constructor(private firestore: AngularFirestore) {}

  getAll(): UserCreential[] {
    return this.credentials;
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  savePassword(userData: UserData): any {
    console.log('Hola desde el otro servicio, ', userData.username);

  }

  createUser(userCredential: UserCreential) {
    // const uniqueId = await biri(); // el ID devuelto será único por ordenador
    // console.log(uniqueId);
  }
}
