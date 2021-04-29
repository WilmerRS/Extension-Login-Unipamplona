import { UserCreential } from './../../interfaces/user-credential';
import { UserData } from './../../interfaces/user-data';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CredentialsManagerService {
  // VARIABLES
  users: UserCreential[];

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

  constructor(private firestore: AngularFirestore) {
    this.users = this.getUsers();
  }

  getAll(): UserCreential[] {
    return this.credentials;
  }

  getUsers(): UserCreential[] {
    /* const storage = localStorage.getItem('credentials');
    if (storage == null) {
      return [];
    } else {
      const credentials = JSON.parse(storage);
      return credentials;
    } */
    return this.getAll();
  }

  getLastUser(): UserCreential {
    const size = this.users.length;
    console.log(size);
    if (size === 0) {
      return this.users[size];
      /* return {
        username: '',
        password: '',
        date: new Date(1990, 1, 26),
        defaultUser: false,
      }; */
    }
    return this.users[size - 1];
  }

  /* Add user to localStorage */
  addUser(userData: UserData): any {
    const newObject: UserCreential = {
      username: userData.username,
      password: userData.password,
      defaultUser: false,
      date: new Date(),
    };
    this.users.push(newObject);
    localStorage.setItem('credentials', JSON.stringify(this.users));
  }

  /* deleteUser(user: {}, value: string): void {
    const myObject = this.credentials;
    const key = Object.keys(myObject).find((acc: any, key: number) => {
      myObject[1].username === value;
    }, {});
    console.log(key);
  } */
}
