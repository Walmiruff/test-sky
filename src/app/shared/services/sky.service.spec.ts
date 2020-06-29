import { TestBed, inject } from '@angular/core/testing';

import { SkyService } from './sky.service';

describe('SkyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkyService]
    });
  });

  it('should be created', inject([SkyService], (service: SkyService) => {
    expect(service).toBeTruthy();
  }));
});
