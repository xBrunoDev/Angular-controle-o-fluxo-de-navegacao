import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Observable } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private usuarioService: UsuarioService,
    private httpClient: HttpClient,
  ) {}

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        `${API}/user/login`,
        {
          userName: usuario,
          password: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(authToken);
        })
      );
  }
}
