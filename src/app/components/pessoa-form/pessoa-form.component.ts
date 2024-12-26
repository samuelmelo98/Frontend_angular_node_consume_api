import { Component } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {
  mensagem: string = ''; // Propriedade para exibir notificações
  pessoa: Pessoa = {
    nome: '',
    idade: null as any,
    email: '',
    telefone: ''
  };

  onSubmit() {
    console.log('Dados da pessoa:', this.pessoa);
    // Aqui você pode enviar os dados para uma API ou outra lógica

     // Simulação de envio e notificação
     this.mensagem = 'Dados enviados com sucesso!'; 

     // Ocultar mensagem após 3 segundos
     setTimeout(() => {
       this.mensagem = '';
     }, 10000);


     
   }
  
}
