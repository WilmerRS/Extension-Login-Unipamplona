import { CredentialsManagerService } from 'src/app/services/credentials-manager/credentials-manager.service';
import { UserCreential } from 'src/app/interfaces/user-credential';
import { PasswordDecodeService } from '../../../services/password-decode/password-decode.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /* @Input() route = '';
  @Output() redirectTo = new EventEmitter<string>(); */
  @ViewChild('inputSelectUsername') inputSelectUsername!: ElementRef;

  /* isSubmitted = false; */
  userCreential!: UserCreential[];
  credentialForm!: FormGroup;
  currentUsernameForm!: FormGroup;
  /* currentUsername = ''; */

  isVisibilityDropdownUser = false;
  isLoginByList = true;

  isSubmitLogin = false;
  isLoggedIn = false;

  constructor(
    private formBuilder: FormBuilder,
    private passwordDecodeService: PasswordDecodeService,
    private crMng: CredentialsManagerService
  ) {
    this.passwordDecodeService.getListenerLoggedIn().subscribe((data) => {
      this.isSubmitLogin = true;
      this.isLoggedIn = data;
    });
  }

  ngOnInit(): void {
    this.userCreential = this.crMng.getAll();
    this.createStructureForm();
  }

  createStructureForm(): void {
    const defaultUser = this.crMng.getDefaulUser();
    let username = '';
    let password = '';
    if (defaultUser) {
      username = defaultUser.username;
      password = defaultUser.password;
      /* this.currentUsername = username; */
    }
    this.credentialForm = this.formBuilder.group({
      username: [username, Validators.required],
      password: [password, Validators.required],
      checkRemember: [false],
    });
    this.currentUsernameForm = this.formBuilder.group({
      username: [username, Validators.required],
    });
  }

  handleRedirectTO(e: Event): void {
    e.preventDefault();
    /* this.redirectTo.emit(this.route); */
    this.isLoginByList = !this.isLoginByList;
  }

  /* initSelectStyles() {
    const w: any = window;
    const d: any = document;
    w.cssSelect = (option: any) => {
      const parent = option.parentNode.parentNode;
      parent.querySelector('[data-css-select="hidden"]').value =
        option.dataset.cssSelect;
      parent.querySelector('[data-css-select="selected"]').value =
        option.innerHTML;
      d.activeElement.blur();
    };
    d.addEventListener('mousedown', (event: any): any => {
      const target = event.target;
      if (
        !(target?.dataset.cssSelect && target?.dataset.cssSelect === 'selected')
      ) {
        return null;
      }
      if (
        w.getComputedStyle(target.nextElementSibling).visibility === 'visible'
      ) {
        setTimeout(() => void d.activeElement?.blur(), 0);
      }
    });
  } */

  selectUser(option: UserCreential): void {
    /* this.currentUsername = option.username; */
    this.visibilityDropdownUser();
    this.credentialForm.patchValue({ ...option });
    this.currentUsernameForm.patchValue({ username: option.username });
    /* console.log(this.credentialForm.value); */
    /* this.isVisibilityDropdownUser = true; */
  }

  getFilteredUsers(): UserCreential[] {
    const user = this.credentialForm.value.username;
    if (
      user === this.currentUsernameForm.value.username ||
      this.currentUsernameForm.value.username == ''
    ) {
      return this.userCreential;
    }
    return this.userCreential.filter((user) =>
      user.username.startsWith(this.currentUsernameForm.value.username)
    );
  }

  visibilityDropdownUser(): void {
    const input: any = this.inputSelectUsername.nativeElement;
    if (this.isVisibilityDropdownUser){
      input.blur();
    } else {
      input.focus();
    }
    this.isVisibilityDropdownUser = !this.isVisibilityDropdownUser;
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

  /* handleCredential(e: any): void {
    console.log(e.value);
    this.credentialForm.setValue(e.target.value, {
      onlySelf: true,
    });
  } */

  /**
   * Inicia la decodificación de la contraseña y su validación.
   */
  onSubmit(): void {
    this.passwordDecodeService.decodePassword(this.credentialForm.value);
  }
}
