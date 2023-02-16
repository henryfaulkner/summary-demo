import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPortfolioComponent } from './customer-portfolio.component';

describe('CustomerPortfolioComponent', () => {
  let component: CustomerPortfolioComponent;
  let fixture: ComponentFixture<CustomerPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
