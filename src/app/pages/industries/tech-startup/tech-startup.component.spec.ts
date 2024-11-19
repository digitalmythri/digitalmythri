import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStartupComponent } from './tech-startup.component';

describe('TechStartupComponent', () => {
  let component: TechStartupComponent;
  let fixture: ComponentFixture<TechStartupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechStartupComponent]
    });
    fixture = TestBed.createComponent(TechStartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
