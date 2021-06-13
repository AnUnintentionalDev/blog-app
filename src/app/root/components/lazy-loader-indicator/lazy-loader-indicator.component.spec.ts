import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoaderIndicatorComponent } from './lazy-loader-indicator.component';

describe('LazyLoaderIndicatorComponent', () => {
  let component: LazyLoaderIndicatorComponent;
  let fixture: ComponentFixture<LazyLoaderIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoaderIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoaderIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
