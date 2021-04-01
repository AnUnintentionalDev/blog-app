import { TestBed } from '@angular/core/testing';

import { MenuLinkService } from './menu-link.service';

describe('MenuLinkService', () => {
  let service: MenuLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
