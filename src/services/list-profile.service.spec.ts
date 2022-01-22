import { TestBed } from '@angular/core/testing';

import { ListProfileService } from './list-profile.service';

describe('ListProfileService', () => {
  let service: ListProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
