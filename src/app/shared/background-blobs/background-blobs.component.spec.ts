import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundBlobsComponent } from './background-blobs.component';

describe('BackgroundBlobsComponent', () => {
  let component: BackgroundBlobsComponent;
  let fixture: ComponentFixture<BackgroundBlobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundBlobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundBlobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
