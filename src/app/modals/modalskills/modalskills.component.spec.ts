import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalskillsComponent } from './modalskills.component';

describe('ModalskillsComponent', () => {
  let component: ModalskillsComponent;
  let fixture: ComponentFixture<ModalskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalskillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
