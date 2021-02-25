import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PasswordDecodeService } from 'src/app/services/password-decode/password-decode.service';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent implements OnInit {
  // Datos del formulario
  userForm = this.formBuilder.group({
    username: [''],
    password: [''],
    checkRemember: [false],
  });

  constructor(
    private formBuilder: FormBuilder,
    private passwordDecodeService: PasswordDecodeService
  ) {}

  ngOnInit(): void {}

  /**
   * Permite mostrar u ocultar la contraseña dentro del input.
   * Actualiza el icono dentro del input.
   * @param passwordField Input de password
   * @param spanIcon Span de icono de visibilidad
   */
  showHidePassword(passwordField: any, spanIcon: any): void {
    if (passwordField.type === 'text') {
      passwordField.type = 'password';
      spanIcon.textContent = 'visibility_off';
      return;
    }
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      spanIcon.textContent = 'visibility';
      return;
    }
  }

  /**
   * Inicia la decodificación de la contraseña y su validación.
   */
  onSubmit(): void {
    this.passwordDecodeService.decodePassword(this.userForm.value);
  }
}
