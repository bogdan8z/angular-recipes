import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWithoutRoutesComponent } from './start-without-routes.component';

describe('StartWithoutRoutesComponent', () => {
  let component: StartWithoutRoutesComponent;
  let fixture: ComponentFixture<StartWithoutRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartWithoutRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartWithoutRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
