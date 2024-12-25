import { TestBed } from '@angular/core/testing';

import { ServicoPessoaService } from './servico.pessoa.service';

describe('ServicoPessoaService', () => {
  let service: ServicoPessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoPessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
