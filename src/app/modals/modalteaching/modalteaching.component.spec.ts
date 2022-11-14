import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalteachingComponent } from './modalteaching.component';

describe('ModalteachingComponent', () => {
  let component: ModalteachingComponent;
  let fixture: ComponentFixture<ModalteachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalteachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalteachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
