import { TestBed } from '@angular/core/testing';

import { CoucheDbService } from './couche-db.service';

describe('CoucheDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoucheDbService = TestBed.get(CoucheDbService);
    expect(service).toBeTruthy();
  });
});
