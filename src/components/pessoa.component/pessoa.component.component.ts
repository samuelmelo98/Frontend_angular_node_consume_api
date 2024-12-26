import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app/app.component';
import { ServicoPessoaService } from '../../servicos/servico.pessoa.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pessoa.component.component.html',
  styleUrl: './pessoa.component.component.css',
  providers:[ServicoPessoaService]
  
})

export class PessoaComponent implements OnInit {

  dados: any[] = [];

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
