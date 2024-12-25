import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoPessoaService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient ) { }
  
   getPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPersonById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  } 


}
