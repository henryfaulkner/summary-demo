import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGreenButtonComponent } from './secondary-green-button.component';

describe('SecondaryGreenButtonComponent', () => {
  let component: SecondaryGreenButtonComponent;
  let fixture: ComponentFixture<SecondaryGreenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryGreenButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryGreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
