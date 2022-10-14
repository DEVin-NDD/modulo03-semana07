import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExercicioSlideComponent } from './exercicio-slide/exercicio-slide.component';
import { ValidacoesComponent } from './validacoes/validacoes.component';
import { ExercicioSlideAulaTresComponent } from './exercicio-slide-aula-tres/exercicio-slide-aula-tres.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioSlideComponent,
    ValidacoesComponent,
    ExercicioSlideAulaTresComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule //Importante importar esse modulo para o uso do formulário reativo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
