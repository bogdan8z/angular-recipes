import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWithRoutesComponent } from './start-with-routes.component';

describe('StartWithRoutesComponent', () => {
  let component: StartWithRoutesComponent;
  let fixture: ComponentFixture<StartWithRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartWithRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartWithRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
