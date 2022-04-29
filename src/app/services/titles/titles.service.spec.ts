import { TestBed } from '@angular/core/testing';

import { TitlesService } from './titles.service';

xdescribe('TitlesService', () => {
  let service: TitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
