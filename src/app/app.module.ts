import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CabecalhoModule,
    RodapeModule,
    AutenticacaoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
