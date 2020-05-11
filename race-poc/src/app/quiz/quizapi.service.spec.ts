import { TestBed } from '@angular/core/testing';

import { QuizapiService } from './quizapi.service';

describe('QuizapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizapiService = TestBed.get(QuizapiService);
    expect(service).toBeTruthy();
  });
});
