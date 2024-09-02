import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingRxjsFromComponent } from './using-rxjs-from.component';

describe('UsingRxjsFromComponent', () => {
  let component: UsingRxjsFromComponent;
  let fixture: ComponentFixture<UsingRxjsFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsingRxjsFromComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingRxjsFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
