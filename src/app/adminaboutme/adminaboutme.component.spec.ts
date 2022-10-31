import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaboutmeComponent } from './adminaboutme.component';

describe('AdminaboutmeComponent', () => {
  let component: AdminaboutmeComponent;
  let fixture: ComponentFixture<AdminaboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
