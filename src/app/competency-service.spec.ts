import { TestBed } from '@angular/core/testing';

import { CompetencyService } from './competency-service';

describe('CompetencyServiceService', () => {
  let service: CompetencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
