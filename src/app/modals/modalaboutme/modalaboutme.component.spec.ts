import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalaboutmeComponent } from './modalaboutme.component';

describe('ModalaboutmeComponent', () => {
  let component: ModalaboutmeComponent;
  let fixture: ComponentFixture<ModalaboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalaboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalaboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
