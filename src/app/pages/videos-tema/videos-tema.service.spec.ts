import { TestBed } from '@angular/core/testing';

import { VideosTemaService } from './videos-tema.service';

describe('VideosTemaService', () => {
  let service: VideosTemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosTemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
