import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogViewComponent } from './app-blog-view.component';

describe('AppBlogViewComponent', () => {
  let component: AppBlogViewComponent;
  let fixture: ComponentFixture<AppBlogViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBlogViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
