import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 } from "uuid";

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  constructor(private http: HttpClient) {}

  private getUserID(): any {
    return this.http.get('http://api.ipify.org/?format=json');
  }

  public getEncryptedUserID(): string {
    /* const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(this.getUserID().toString(), salt);
    return hash.split('/').join(); */
    return v4();
  }

  // public getEncryptedUser(usnername: string, password: string): void {}
}
