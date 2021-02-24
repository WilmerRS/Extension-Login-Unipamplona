import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showHidePassword(passwordField: any, spanIcon: any) {
    if (passwordField.type == 'text') {
      passwordField.type = 'password';
      spanIcon.textContent = 'visibility_off';
      return;
    }
    if (passwordField.type == 'password') {
      passwordField.type = 'text';
      spanIcon.textContent = 'visibility';
      return;
    }
  }
}
