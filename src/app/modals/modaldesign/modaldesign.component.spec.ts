import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldesignComponent } from './modaldesign.component';

describe('ModaldesignComponent', () => {
  let component: ModaldesignComponent;
  let fixture: ComponentFixture<ModaldesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaldesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
