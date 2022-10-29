import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.sass']
})
export class PaisesComponent implements OnInit {

  //ARRAY PARA ARMAZENAR OS FUTUROS DADOS
  arrayResult: any[] = [];

  constructor() { }

  //FUNCAO QUE SERÁ CAHAMADA AO INICIAR A CLASSE
  ngOnInit(): void {
    fetch("https://restcountries.com/v3.1/all")
      .then(r => r.json()) //TRANSFORMA O RETORNO EM JSON
      .then(
        paises => //EXECUTA UMA VEZ PARA CADA OBJETO QUE EXISTIR DENTRO DO JSON
          paises.forEach(
            (p: any) => {
              this.arrayResult.push(p);//INCLUINDO O OBJETO NO ARRAY CRIADO NO INÍCIO
            }
          )
      );
  }

}
