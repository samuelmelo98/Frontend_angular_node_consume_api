import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export class PdfMakeService {
  private pdfMake: any;

  constructor() {
    this.pdfMake = pdfMake; // Certifique-se de que a instância está sendo atribuída corretamente
    this.pdfMake.vfs = pdfFonts.pdfMake?.vfs; // Use a propriedade "?.vfs" para evitar erros caso "pdfFonts.pdfMake" esteja indefinido
  }

  getPdfMakeInstance() {
    return this.pdfMake;
  }
}
