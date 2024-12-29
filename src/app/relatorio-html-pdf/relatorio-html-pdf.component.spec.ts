import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioHtmlPdfComponent } from './relatorio-html-pdf.component';

describe('RelatorioHtmlPdfComponent', () => {
  let component: RelatorioHtmlPdfComponent;
  let fixture: ComponentFixture<RelatorioHtmlPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioHtmlPdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioHtmlPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
