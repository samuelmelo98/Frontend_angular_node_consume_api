import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

export class PdfMakeService {
  private pdfMake: any;

  constructor() {
    this.pdfMake = pdfMake;
    this.pdfMake.vfs = pdfFonts.pdfMake.vfs; // Configura as fontes no pdfMake
  }

  getPdfMakeInstance() {
    return this.pdfMake;
  }
}
