import { Component, OnInit } from '@angular/core';
import { ServicoPessoaService } from '../../servicos/servico.pessoa.service';
import { CommonModule } from '@angular/common';
import { UsersComponent } from "../users/users.component";


@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [CommonModule, UsersComponent],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css',
  providers:[ServicoPessoaService,UsersComponent]
    
})

export class PessoaComponent implements OnInit {

  dados: any[] = [];
  dados2: any[] =['1','2','3'];

  constructor(private servicoPessoa: ServicoPessoaService){}

  ngOnInit(): void {
    //this.loadPersons(); // Chama o método ao inicializar o componente
    this.loadPersons();
  }

  carrega(): void {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.dados = json; // Armazena os dados na variável
        console.log(this.dados); // Exibe os dados no console para verificar
      })
      .catch(error => console.error('Erro ao carregar os dados:', error));
  }

  loadPersons(): void {
    this.servicoPessoa.getPersons().subscribe({
      next: (data) => {
        this.dados = data; // Armazena os dados recebidos
        console.log('Dados carregados:', data);
      },
      error: (error) => {
        console.error('Erro ao carregar os dados:', error);
      }
    });
  

}

}
