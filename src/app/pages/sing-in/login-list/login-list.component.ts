import { CredentialsManagerService } from 'src/app/services/credentials-manager/credentials-manager.service';
import { UserCreential } from 'src/app/interfaces/user-credential';
import { PasswordDecodeService } from './../../../services/password-decode/password-decode.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import M from 'materialize-css';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['../sing-in.component.css'],
})
export class LoginListComponent implements OnInit {
  @Input() route = '';
  @Output() redirectTo = new EventEmitter<string>();

  isSubmitted = false;
  isVisibilityDropdownUser = false;
  userCreential!: UserCreential[];
  credentialForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private passwordDecodeService: PasswordDecodeService,
    private crMng: CredentialsManagerService
  ) {}

  ngOnInit(): void {
    this.userCreential = this.crMng.getAll();
    this.createStructureForm();
  }

  createStructureForm() {
    const defaultUser = this.crMng.getDefaulUser();
    let username = '';
    let password = '';
    if (defaultUser) {
      username = defaultUser.username;
      password = defaultUser.password;
    }
    this.credentialForm = this.formBuilder.group({
      username: [username, Validators.required],
      password: [password, Validators.required],
      checkRemember: [false],
    });
  }

  handleRedirectTO(e: Event): void {
    e.preventDefault();
    this.redirectTo.emit(this.route);
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

  selectUser(option: any) {
    this.credentialForm.patchValue({ ...option });
    console.log(this.credentialForm.value);
    this.isVisibilityDropdownUser=true;
  }

  visibilityDropdownUser() {
    this.isVisibilityDropdownUser=true;
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
