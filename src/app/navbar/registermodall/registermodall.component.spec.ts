import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermodallComponent } from './registermodall.component';

describe('RegistermodallComponent', () => {
  let component: RegistermodallComponent;
  let fixture: ComponentFixture<RegistermodallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistermodallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistermodallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
