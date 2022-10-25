import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.sass']
})
export class PaisesComponent implements OnInit {

  arrayResult: any[] = [];
  requestOptions: any = {
    method: 'GET',
    redirect: 'follow'
  };

  result = fetch("https://restcountries.com/v3.1/all", this.requestOptions);

  constructor() { }
  ngOnInit(): void {
    this.result.then(r => r.json()).then(paises => paises.forEach((p: any) => {
      this.arrayResult.push(p);
      console.log(p);
    }));

  }

}
