import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConnectWithUsComponent } from './app-connect-with-us.component';

describe('AppConnectWithUsComponent', () => {
  let component: AppConnectWithUsComponent;
  let fixture: ComponentFixture<AppConnectWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppConnectWithUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConnectWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
