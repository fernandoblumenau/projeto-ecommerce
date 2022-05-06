import { Cep } from './../modelo/cep';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  urlViaCep: string ='https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  getCEP(cep:string){
    const urlGet = `${this.urlViaCep}/${cep}/json/`;

    return this.http.get<Cep>(urlGet);

  }
}
