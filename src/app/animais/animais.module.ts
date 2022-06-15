import { CartaoModule } from './../componentes/cartao/cartao.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { ComentariosComponent } from './detalhe-animal/comentarios/comentarios.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimalComponent } from './animal/animal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GradeFotosAnimaisComponent,
    DetalheAnimalComponent,
    ListaAnimaisComponent,
    ComentariosComponent,
    AnimalComponent,
  ],
  imports: [
    AnimaisRoutingModule,
    CommonModule,
    CartaoModule,
    SharedModule
  ]
})
export class AnimaisModule { }
