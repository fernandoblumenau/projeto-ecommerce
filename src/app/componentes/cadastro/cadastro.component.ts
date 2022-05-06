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

  formContato: Cep ={};

  showForm = new Subject<boolean>();

  cepInput: string ='';

  constructor(private cepService: ViaCepService) { }

  ngOnInit(): void {
  }

  getViaCEP(cep: FocusEvent){
    if((cep.target as HTMLInputElement)?.value){
      let inputCEP = (cep.target as HTMLInputElement)?.value;
      console.log(inputCEP);
      const cepResponse = this.cepService.getCEP(inputCEP);
      cepResponse.subscribe(
        (cepModel) =>{
          this.formContato = cepModel;
          this.showForm.next(true);
        }
      )
    }
  }

}
