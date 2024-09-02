import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingRxjsOfComponent } from './using-rxjs-of.component';

describe('UsingRxjsOfComponent', () => {
  let component: UsingRxjsOfComponent;
  let fixture: ComponentFixture<UsingRxjsOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsingRxjsOfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingRxjsOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
