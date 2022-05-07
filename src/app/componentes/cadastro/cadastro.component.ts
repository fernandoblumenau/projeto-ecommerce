import { CadastroService } from './../../servicos/cadastro.service';
import { Cadastro } from './../../modelo/cadastro';
import { ViaCepService } from './../../servicos/via-cep.service';
import { Cep } from './../../modelo/cep';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formContato: Cadastro ={};

  showForm = new Subject<boolean>();

  cepInput: string ='';

  constructor(private cepService: ViaCepService,
        private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  getViaCEP(cep: FocusEvent){
    if((cep.target as HTMLInputElement)?.value){
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      console.log(inputCEP);
      const cepResponse = this.cepService.getCEP(inputCEP);
      cepResponse.subscribe(
        (cepModel) =>{
          this.formContato.ruaCadastro = cepModel.logradouro;
          this.formContato.bairroCadastro = cepModel.bairro;
          this.formContato.estadoCadastro = cepModel.uf;
          this.formContato.cidadeCadastro = cepModel.localidade;

          this.showForm.next(true);
        }
      )
    }
  }

  save(){
    this.cadastroService.save(this.formContato).subscribe(
      (resp)=>{
        console.log(resp);
      }
    );
  }

}
