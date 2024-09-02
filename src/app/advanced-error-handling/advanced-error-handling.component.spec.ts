import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedErrorHandlingComponent } from './advanced-error-handling.component';

describe('AdvancedErrorHandlingComponent', () => {
  let component: AdvancedErrorHandlingComponent;
  let fixture: ComponentFixture<AdvancedErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedErrorHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
