import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { FormsModule,} from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, LoginComponent, NovoUsuarioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
