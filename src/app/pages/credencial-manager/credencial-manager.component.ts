import { Component, OnInit } from '@angular/core';
import { UserCreential } from 'src/app/interfaces/user-credential';
import { CredentialsManagerService } from 'src/app/services/credentials-manager/credentials-manager.service';

@Component({
  selector: 'app-credencial-manager',
  templateUrl: './credencial-manager.component.html',
  styleUrls: ['./credencial-manager.component.css'],
})
export class CredencialManagerComponent implements OnInit {
  userCredentials: UserCreential[] = [];

  constructor(
    private credentialsManagerService: CredentialsManagerService
  ) {}

  ngOnInit(): void {
    this.credentialsManagerService.getUsers().subscribe((usersSnapshot) => {
      this.userCredentials = [];
      usersSnapshot.forEach((userCredentials: any) => {
        console.log(userCredentials.payload.doc.data());
        this.userCredentials.push({
          $key: userCredentials.payload.doc.id,
          username: userCredentials.payload.doc.data().username,
          password: userCredentials.payload.doc.data().password,
          date: userCredentials.payload.doc.data().date,
          defaultUser: userCredentials.payload.doc.data().defaulUser
        });
      });
    });
    // this.userCredentials = this.credentialsManagerService.getAll();
  }
}
