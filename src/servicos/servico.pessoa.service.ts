import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoPessoaService {
  isLoading: boolean = false;  // Controla a exibição do loader
  persons: any[] = []; // Armazena os dados da consulta
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient ) { }
  
   getPersons(): Observable<any[]> {
    this.isLoading = true; // Exibe o loader antes da requisição
    return this.http.get<any[]>(this.apiUrl);
  }

  getPersonById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  } 
  
   // Método para buscar as pessoas e controlar o estado de carregamento
   fetchPersons() {
    this.isLoading = true; // Exibe o loader antes da requisição

    this.getPersons().subscribe(
      (data) => {
        this.persons = data; // Armazena os dados
        this.isLoading = false; // Oculta o loader após a resposta
      },
      (error) => {
        console.error('Erro ao carregar os dados', error);
        this.isLoading = false; // Oculta o loader em caso de erro
      }
    );

}
}

