
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PessoaComponent} from '../components/pessoa.component/pessoa.component.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PessoaComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 // schemas: [NO_ERRORS_SCHEMA]  // Adicionando NO_ERRORS_SCHEMA
})
export class AppComponent {
  title = 'meu-projeto';
}
