import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  isLoading: boolean = false;  // Controla a exibição do loader
   users: any[] = []; // Armazena os dados da consulta
    private apiUrl = 'http://localhost:8080/users';
    constructor(private http: HttpClient ) { }
    
     getUsers(): Observable<any[]> {
      this.isLoading = true; // Exibe o loader antes da requisição
      return this.http.get<any[]>(this.apiUrl);
    }

    getUsers2() {
      return this.http.get('http://localhost:8080/users'); // Exemplo de chamada HTTP
    }
  
    getUsersById(id: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
    } 
    
     // Método para buscar as pessoas e controlar o estado de carregamento
     fetchPersons() {
      this.isLoading = true; // Exibe o loader antes da requisição
  
      this.getUsers().subscribe(
        (data) => {
          this.users = data; // Armazena os dados
          this.isLoading = false; // Oculta o loader após a resposta
        },
        (error) => {
          console.error('Erro ao carregar os dados', error);
          this.isLoading = false; // Oculta o loader em caso de erro
        }
      );
  
  }
}
