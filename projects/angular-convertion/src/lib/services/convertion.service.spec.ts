import { TestBed } from '@angular/core/testing';

import { PremuiConvertionService } from './convertion.service';

describe('PremuiTranslationService', () => {
  let service: PremuiConvertionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremuiConvertionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
