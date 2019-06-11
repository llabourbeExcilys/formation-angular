import { TestBed } from '@angular/core/testing';

import { ServiceRecipeService } from './service-recipe.service';

describe('ServiceRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceRecipeService = TestBed.get(ServiceRecipeService);
    expect(service).toBeTruthy();
  });
});
