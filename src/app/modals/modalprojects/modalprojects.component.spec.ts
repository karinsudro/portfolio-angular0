import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalprojectsComponent } from './modalprojects.component';

describe('ModalprojectsComponent', () => {
  let component: ModalprojectsComponent;
  let fixture: ComponentFixture<ModalprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
