import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  constructor(private http: HttpClient) {}

  private getUserID(): any {
    return this.http.get('http://api.ipify.org/?format=json');
  }

  public getEncryptedUserID(): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(this.getUserID().toString(), salt);
    return hash.split('/').join();
  }

  // public getEncryptedUser(usnername: string, password: string): void {}
}
