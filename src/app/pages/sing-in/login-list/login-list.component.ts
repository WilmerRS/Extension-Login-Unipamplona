import { CredentialsManagerService } from 'src/app/services/credentials-manager/credentials-manager.service';
import { UserCreential } from 'src/app/interfaces/user-credential';
import { PasswordDecodeService } from './../../../services/password-decode/password-decode.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['../sing-in.component.css'],
})
export class LoginListComponent implements OnInit {
  @Input() route = '';
  @Output() redirectTo = new EventEmitter<string>();

  isSubmitted = false;

  userCreential: UserCreential[];

  credentialForm = this.formBuilder.group({
    credentials: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private passwordDecodeService: PasswordDecodeService,
    private crMng: CredentialsManagerService
  ) {
    this.userCreential = this.crMng.getAll();
  }

  ngOnInit(): void {
    console.log('LoginListComponent');
  }

  handleRedirectTO(e: Event): void {
    e.preventDefault();
    this.redirectTo.emit(this.route);
  }

  handleCredential(e: any): void {
    console.log(e.value);
    this.credentialForm.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  /**
   * Inicia la decodificación de la contraseña y su validación.
   */
  onSubmit(): void {
    this.passwordDecodeService.decodePassword(this.credentialForm.value);
  }
}
