import { TestBed } from '@angular/core/testing';

import { ListhotelService } from './listhotel.service';

describe('ListhotelService', () => {
  let service: ListhotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListhotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
