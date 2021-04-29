import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.css'],
})
export class TabButtonComponent implements OnInit {
  constructor() {}

  @Input() nameButton = '';
  @Input() toRedirectPath = '';
  @Input() iconPath = '';

  ngOnInit(): void {}
}
