import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../servicos/user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers:[UserServiceService]
})
export class UsersComponent implements OnInit {
  users: any[] = [];
constructor(private userService: UserServiceService){}
  ngOnInit(): void {
    //this.loadPersons(); // Chama o método ao inicializar o componente
    this.loadUsers();
  }

  carrega(): void {
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(json => {
        this.users = json; // Armazena os dados na variável
        console.log(this.users); // Exibe os dados no console para verificar
      })
      .catch(error => console.error('Erro ao carregar os dados:', error));
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data; // Armazena os dados recebidos
        console.log('Dados carregados:', data);
      },
      error: (error) => {
        console.error('Erro ao carregar os dados:', error);
      }
    });

}
}
