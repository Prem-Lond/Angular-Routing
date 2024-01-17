import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetNotFoundComponent } from './paget-not-found.component';

describe('PagetNotFoundComponent', () => {
  let component: PagetNotFoundComponent;
  let fixture: ComponentFixture<PagetNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagetNotFoundComponent]
    });
    fixture = TestBed.createComponent(PagetNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
