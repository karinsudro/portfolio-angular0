import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmodallComponent } from './loginmodall.component';

describe('LoginmodallComponent', () => {
  let component: LoginmodallComponent;
  let fixture: ComponentFixture<LoginmodallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginmodallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginmodallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
