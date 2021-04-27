import { CredentialsManagerService } from 'src/app/services/credentials-manager/credentials-manager.service';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PasswordDecodeService } from 'src/app/services/password-decode/password-decode.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent implements OnInit, AfterViewInit {
  // VARIABLES
  Myinterval: any;
  @ViewChild('username') inputUsername!: ElementRef;
  @ViewChild('password') inputPassword!: ElementRef;
  // Datos del formulario
  userForm = this.formBuilder.group({
    username: [''],
    password: [''],
    checkRemember: [false],
  });

  constructor(
    private formBuilder: FormBuilder,
    private passwordDecodeService: PasswordDecodeService,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
    private credentials: CredentialsManagerService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.focusInput();
    this.getCredentials();
    this.cdRef.detectChanges();
  }

  getCredentials(): void {
    const credentials2 = this.credentials.getLastUser();
    this.userForm.setValue({
      ...this.userForm.value,
      username: credentials2.username,
      password: credentials2.password,
    });
  }

  focusInput(): void {
    this.renderer.selectRootElement(this.inputPassword.nativeElement).focus();
    setTimeout(() => {
      this.renderer.selectRootElement(this.inputUsername.nativeElement).focus();
    }, 100);
  }

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
