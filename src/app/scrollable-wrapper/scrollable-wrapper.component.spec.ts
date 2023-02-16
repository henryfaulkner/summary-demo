import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableWrapperComponent } from './scrollable-wrapper.component';

describe('ScrollableWrapperComponent', () => {
  let component: ScrollableWrapperComponent;
  let fixture: ComponentFixture<ScrollableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollableWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
