import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.css'],
})
export class TabButtonComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() nameButton = '';
  @Input() toRedirectPath = '';
  @Input() iconPath = '';

  ngOnInit(): void {}

  isActive(): boolean {
    return this.router.isActive(`/${this.toRedirectPath}`, false);
  }
}
