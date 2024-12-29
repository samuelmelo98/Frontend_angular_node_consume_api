import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PessoaComponent } from './components/pessoa.component/pessoa.component.component';

// Polyfill para self
(window as any).self = window;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
