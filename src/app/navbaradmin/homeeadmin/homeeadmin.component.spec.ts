import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeeadminComponent } from './homeeadmin.component';

describe('HomeeadminComponent', () => {
  let component: HomeeadminComponent;
  let fixture: ComponentFixture<HomeeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeeadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
