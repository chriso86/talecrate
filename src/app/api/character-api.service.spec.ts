import { TestBed, inject } from '@angular/core/testing';

import { CharacterApiService } from './character-api.service';

describe('CharacterApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterApiService]
    });
  });

  it('should ...', inject([CharacterApiService], (service: CharacterApiService) => {
    expect(service).toBeTruthy();
  }));
});
