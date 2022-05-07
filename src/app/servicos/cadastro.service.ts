import { Cadastro } from './../modelo/cadastro';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

constructor(private http: HttpClient) { }


urlApiCadastro: string = `${environment.urlAPI}/cadastros`;


save(cadastro: Cadastro ) {

  return this.http.post<Cadastro>(this.urlApiCadastro, cadastro);
}

}
