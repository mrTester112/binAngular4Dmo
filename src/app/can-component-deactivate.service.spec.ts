import { TestBed, inject } from '@angular/core/testing';

import { CanComponentDeactivateService } from './can-component-deactivate.service';

describe('CanComponentDeactivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanComponentDeactivateService]
    });
  });

  it('should be created', inject([CanComponentDeactivateService], (service: CanComponentDeactivateService) => {
    expect(service).toBeTruthy();
  }));
});
