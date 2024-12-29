import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// Função para configurar o VFS
export function setPdfMakeVfs(customVfs: any): void {
  // Defina o VFS na instância do pdfMake
  (pdfMake as any).vfs = customVfs;
}

// Exporta a função setPdfMakeVfs para que possa ser chamada em outros lugares
export function initializePdfMake() {
  // Cria o VFS com a fonte personalizada
  const customVfs = {
    ...pdfFonts.pdfMake.vfs,
    'Roboto-Regular.ttf': '<BASE64_ENCODED_STRING>', // Substitua com a string Base64 correta
  };

  // Configura o VFS usando a função setter
  setPdfMakeVfs(customVfs);

  return pdfMake;
}
