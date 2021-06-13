import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogCreateComponent } from './app-blog-create.component';

describe('AppBlogCreateComponent', () => {
  let component: AppBlogCreateComponent;
  let fixture: ComponentFixture<AppBlogCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBlogCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
