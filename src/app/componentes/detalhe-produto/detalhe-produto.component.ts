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


  constructor(private produtoService: ProdutosService,
              private route: ActivatedRoute) { }

  public detalhesProduto?: Produtos;

  ngOnInit() {

    const idProduto = this.route.snapshot.paramMap.get('id');

    if(idProduto) {
      this.produtoService.obterProdutoById(idProduto)
        .subscribe(
          (detalhesProdutos) => {
            this.detalhesProduto = detalhesProdutos;
            console.log(detalhesProdutos);
          },
        );

    }
  }
}
