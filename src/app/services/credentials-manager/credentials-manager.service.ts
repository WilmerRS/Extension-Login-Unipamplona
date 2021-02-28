import { Injectable } from '@angular/core';
import { UserCreential } from 'src/app/interfaces/user-credential';

@Injectable({
  providedIn: 'root',
})
export class CredentialsManagerService {
  credentials: UserCreential[] = [
    {
      username: 'Wilmer',
      password: 'pass',
      date: new Date(2021, 0, 26),
      default: false
    },
    {
      username: 'Edwar',
      password: 'pass',
      date: new Date(2021, 1, 26),
      default: false
    },
    {
      username: 'Alfredo',
      password: 'pass',
      date: new Date(2021, 1, 26),
      default: false
    },
    {
      username: 'Camilo',
      password: 'pass',
      date: new Date(2021, 1, 26),
      default: false
    },
    {
      username: 'Yess',
      password: 'pass',
      date: new Date(2021, 1, 26),
      default: false
    },
    {
      username: 'Fer',
      password: '2021-02-26',
      date: new Date(2021, 1, 26),
      default: false
    },
  ];
  constructor() {}

  getAll(): UserCreential[]{
    return this.credentials;
  }
}
