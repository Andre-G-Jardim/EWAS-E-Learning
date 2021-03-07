import { TestBed } from '@angular/core/testing';

import { MetodosConteudoService } from './metodos-conteudo.service';

describe('MetodosConteudoService', () => {
  let service: MetodosConteudoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodosConteudoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
