import { Observable } from 'rxjs';
import { Produtos } from './../modelo/produtos';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  protected UrlServiceV1: string = "http://localhost:3000/";

  obterProdutos() : Observable<Produtos[]> {
      return this.http
      .get<Produtos[]>(this.UrlServiceV1 + "produtos");
  }
}
