import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouserComponent } from './trouser.component';

describe('TrouserComponent', () => {
  let component: TrouserComponent;
  let fixture: ComponentFixture<TrouserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrouserComponent]
    });
    fixture = TestBed.createComponent(TrouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
