import { Produtos } from './../../modelo/produtos';
import { ProdutosService } from './../../servicos/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  public produtos?: Produtos[];

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
      );
  }
}
