import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremComponent } from './prem.component';

describe('PremComponent', () => {
  let component: PremComponent;
  let fixture: ComponentFixture<PremComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremComponent]
    });
    fixture = TestBed.createComponent(PremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
