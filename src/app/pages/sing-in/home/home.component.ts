import { FormBuilder } from '@angular/forms';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { PasswordDecodeService } from '../../../services/password-decode/password-decode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /* routes = {
    loginList: 'LOGIN_LIST',
    loginInputs: 'LOGIN_INPUTS',
    shared: 'SHARED',
  }; */

  /* currentState = this.routes.loginList; */

  constructor() {}

  ngOnInit(): void {}

  /* redirectTo(route: string): void {
    this.currentState = route;
  } */
}
