import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalredesComponent } from './modalredes.component';

describe('ModalredesComponent', () => {
  let component: ModalredesComponent;
  let fixture: ComponentFixture<ModalredesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalredesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalredesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
