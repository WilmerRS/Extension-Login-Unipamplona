import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialManagerComponent } from './credencial-manager.component';

describe('CredencialManagerComponent', () => {
  let component: CredencialManagerComponent;
  let fixture: ComponentFixture<CredencialManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredencialManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredencialManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
