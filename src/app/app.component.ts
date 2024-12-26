
import { Component, NgModule } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { PessoaComponent} from '../components/pessoa.component/pessoa.component.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { Router } from '@angular/router';
import { routes } from './app.routes';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,PessoaComponent,LoaderComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 // schemas: [NO_ERRORS_SCHEMA]  // Adicionando NO_ERRORS_SCHEMA
})
export class AppComponent {
  title = 'meu-projeto';
  isLoading: boolean = false;
  constructor(private router: Router) {}


  fetchData() {
    this.isLoading = true; // Mostra o loader
    setTimeout(() => {
      this.isLoading = false; // Esconde o loader após a simulação da consulta
      console.log('Dados carregados');
    }, 3000); // Simula uma consulta demorada de 3 segundos
}

 // Método para navegar para a rota 'home'
 navigateToAdd() {
console.log("teste");
  this.router.navigate(['/add']);
}

// Método para navegar para a rota 'about'
navigateToLista() {
  this.router.navigate(['/pessoas']);
}
}
