import { Routes } from '@angular/router';
import { PessoaComponent } from '../components/pessoa.component/pessoa.component.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { RelatorioHtmlPdfComponent } from './relatorio-html-pdf/relatorio-html-pdf.component';

export const routes: Routes = [

    { path: 'pessoas', component: PessoaComponent }, // Configura a rota para 'pessoas' para o MeuComponente
    { path: 'teste', redirectTo: '/pessoas', pathMatch: 'full' }, // Redireciona para 'pessoas' por padrão
    { path: 'samuel', redirectTo: '/', pathMatch: 'full' }, // Redireciona para 'pessoas' por padrão
    { path: '', redirectTo: '/pessoas', pathMatch: 'full' }, // Redireciona para 'pessoas' por padrão
    { path: 'relatorio', component: RelatorioComponent}, // Redireciona para 'pessoas' por padrão
    { path: 'add', component: PessoaFormComponent },
    { path: 'html-pdf_relatorio', component: RelatorioHtmlPdfComponent },
];
