import { Routes } from '@angular/router';
import { PessoaComponent } from '../components/pessoa.component/pessoa.component.component';

export const routes: Routes = [

    { path: 'pessoas', component: PessoaComponent }, // Configura a rota para 'pessoas' para o MeuComponente
    { path: 'teste', redirectTo: '/pessoas', pathMatch: 'full' }, // Redireciona para 'pessoas' por padrão
    { path: 'samuel', redirectTo: '/', pathMatch: 'full' }, // Redireciona para 'pessoas' por padrão
    { path: '', redirectTo: '/', pathMatch: 'full' }, // Redireciona para 'pessoas' por padrão
];
