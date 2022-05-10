import { Produtos } from './../../modelo/produtos';
import { ProdutosService } from './../../servicos/produtos.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.scss']
})
export class DetalheProdutoComponent implements OnInit {


  constructor(private produtoService: ProdutosService) { }

  public detalhesProdutos?: Produtos[];

  ngOnInit() {
    this.produtoService.obterProdutos()
      .subscribe(
        detalhesProdutos => {
          this.detalhesProdutos = detalhesProdutos;
          console.log(detalhesProdutos);
        },
      );
  }
}
