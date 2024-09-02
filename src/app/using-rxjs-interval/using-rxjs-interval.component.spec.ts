import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingRxjsIntervalComponent } from './using-rxjs-interval.component';

describe('UsingRxjsIntervalComponent', () => {
  let component: UsingRxjsIntervalComponent;
  let fixture: ComponentFixture<UsingRxjsIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsingRxjsIntervalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingRxjsIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
