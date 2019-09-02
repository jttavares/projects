import { MeuComponenteComponente } from './meu-componente.componente';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
