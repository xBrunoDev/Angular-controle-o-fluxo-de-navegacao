import { MenuModule } from './../menu/menu.module';
import { CabecalhoComponent } from './cabecalho.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [CommonModule, RouterModule,MenuModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}
