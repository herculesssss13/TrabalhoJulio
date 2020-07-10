import { TestBed } from '@angular/core/testing';

import { AtorFormService } from './ator-form.service';

describe('AtorFormService', () => {
  let service: AtorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
