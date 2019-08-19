import { TestBed } from '@angular/core/testing';

import { RecipesAPIService } from './recipes-api.service';

describe('RecipesAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesAPIService = TestBed.get(RecipesAPIService);
    expect(service).toBeTruthy();
  });
});
