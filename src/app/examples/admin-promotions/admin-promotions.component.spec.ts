import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPromotionsComponent } from './admin-promotions.component';

describe('SignupComponent', () => {
  let component: AdminPromotionsComponent;
  let fixture: ComponentFixture<AdminPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
