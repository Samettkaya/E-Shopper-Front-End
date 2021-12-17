import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaNavbarComponent } from './mega-navbar.component';

describe('MegaNavbarComponent', () => {
  let component: MegaNavbarComponent;
  let fixture: ComponentFixture<MegaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
