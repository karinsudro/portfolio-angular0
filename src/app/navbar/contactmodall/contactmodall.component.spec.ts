import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmodallComponent } from './contactmodall.component';

describe('ContactmodallComponent', () => {
  let component: ContactmodallComponent;
  let fixture: ComponentFixture<ContactmodallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmodallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmodallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
