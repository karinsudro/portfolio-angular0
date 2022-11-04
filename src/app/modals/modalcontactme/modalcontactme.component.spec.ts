import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcontactmeComponent } from './modalcontactme.component';

describe('ModalcontactmeComponent', () => {
  let component: ModalcontactmeComponent;
  let fixture: ComponentFixture<ModalcontactmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalcontactmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalcontactmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
