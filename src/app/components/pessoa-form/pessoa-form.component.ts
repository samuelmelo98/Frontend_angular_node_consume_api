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
  private pessoas: Pessoa[] = [];
  pessoa: Pessoa = {
    nome: '',
    idade: null as any,
    email: '',
    telefone: ''
  };

  onSubmit() {
    console.log('Dados da pessoa:', this.pessoa);
    if(this.pessoaExiste(this.pessoa)){
      this.mensagem = 'Pessoa já existe!'; 
    } else{
      this.pessoas.push(this.pessoa);
        // Simulação de envio e notificação
      this.mensagem = 'Dados enviados com sucesso!'; 
    }
    this.resetForm();
    
    // Aqui você pode enviar os dados para uma API ou outra lógica


     // Ocultar mensagem após 3 segundos
     setTimeout(() => {
       this.mensagem = '';
     }, 10000);


     
   }

    // Método para limpar os campos
  resetForm() {
    this.pessoa = {
      nome: '',
      idade: null as any,
      email: '',
      telefone: ''
    };
  
}

// Método para verificar se a pessoa já existe
pessoaExiste(pessoa: Pessoa): boolean {
  return this.pessoas.some(p => p.nome === pessoa.nome || p.email === pessoa.email);
}
}
