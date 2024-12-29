import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-relatorio-html-pdf',
  templateUrl: './relatorio-html-pdf.component.html',
  styleUrls: ['./relatorio-html-pdf.component.css']
})
export class RelatorioHtmlPdfComponent {
  @ViewChild('relatorioContent') relatorioContent!: ElementRef;

  dataAtual: string = new Date().toLocaleDateString(); // Exibe a data atual no relatório

  constructor() {}

  async gerarRelatorio() {
    if (typeof window !== 'undefined') {
      const html2pdf = (await import('html2pdf.js')).default;

      const options = {
        filename: 'relatorio-completo.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      if (this.relatorioContent?.nativeElement) {
        html2pdf()
          .from(this.relatorioContent.nativeElement)
          .set(options)
          .save()
          .catch((error: any) => console.error('Erro ao gerar o PDF:', error));
      } else {
        console.error('Elemento do relatório não encontrado.');
      }
    } else {
      console.error('Geração de PDF não é suportada no lado do servidor.');
    }
  }
}
