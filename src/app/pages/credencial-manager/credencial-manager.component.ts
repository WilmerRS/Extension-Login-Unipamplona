import { Component, OnInit } from '@angular/core';
import { UserCreential } from 'src/app/interfaces/user-credential';
import { CredentialsManagerService } from 'src/app/services/credentials-manager/credentials-manager.service';

@Component({
  selector: 'app-credencial-manager',
  templateUrl: './credencial-manager.component.html',
  styleUrls: ['./credencial-manager.component.css']
})
export class CredencialManagerComponent implements OnInit {

  userCredentials: UserCreential[] = [];

  constructor(private credentialsManagerService: CredentialsManagerService) { }

  ngOnInit(): void {
    this.userCredentials = this.credentialsManagerService.getAll();
  }

}
