import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalportadaComponent } from './modalportada.component';

describe('ModalportadaComponent', () => {
  let component: ModalportadaComponent;
  let fixture: ComponentFixture<ModalportadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalportadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalportadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
