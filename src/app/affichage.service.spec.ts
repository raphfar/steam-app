/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AffichageService } from './affichage.service';

describe('AffichageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffichageService]
    });
  });

  it('should ...', inject([AffichageService], (service: AffichageService) => {
    expect(service).toBeTruthy();
  }));
});
