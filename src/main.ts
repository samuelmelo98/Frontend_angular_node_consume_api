import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PessoaComponent } from './components/pessoa.component/pessoa.component.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
