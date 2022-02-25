import { TestBed } from '@angular/core/testing';

import { PremuiTranslationService } from './translation.service';

describe('PremuiTranslationService', () => {
  let service: PremuiTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremuiTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
