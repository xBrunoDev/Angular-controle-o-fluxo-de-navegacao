import { RodapeComponent } from './rodape.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [RodapeComponent],
  imports: [CommonModule, RouterModule],
  exports: [RodapeComponent],
})
export class RodapeModule {}
