import { FormBuilder } from '@angular/forms';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { PasswordDecodeService } from './../../../services/password-decode/password-decode.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['../sing-in.component.css'],
})
export class SingInComponent implements OnInit {
  routes = {
    loginList: 'LOGIN_LIST',
    loginInputs: 'LOGIN_INPUTS',
    shared: 'SHARED',
  };

  currentState = this.routes.loginList;

  constructor() {}

  ngOnInit(): void {}

  redirectTo(route: string): void {
    this.currentState = route;
  }
}
