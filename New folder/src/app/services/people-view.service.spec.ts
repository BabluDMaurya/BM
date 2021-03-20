import { TestBed } from '@angular/core/testing';

import { PeopleViewService } from './people-view.service';

describe('PeopleViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleViewService = TestBed.get(PeopleViewService);
    expect(service).toBeTruthy();
  });
});
