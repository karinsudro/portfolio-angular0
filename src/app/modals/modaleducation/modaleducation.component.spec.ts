import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleducationComponent } from './modaleducation.component';

describe('ModaleducationComponent', () => {
  let component: ModaleducationComponent;
  let fixture: ComponentFixture<ModaleducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaleducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaleducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
