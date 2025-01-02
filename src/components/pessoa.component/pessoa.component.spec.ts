import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaComponentComponent } from './pessoa.component';

describe('PessoaComponentComponent', () => {
  let component: PessoaComponentComponent;
  let fixture: ComponentFixture<PessoaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PessoaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
