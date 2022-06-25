import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Charada {
  id: number;
  pergunta: string;
  resposta: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  charada: Charada = {
    id: 0,
    pergunta: '',
    resposta: ''
  };

  revelar = false;

  url = 'http://lucasreno.kinghost.net/charada';

  constructor(private http: HttpClient) {
    this.pegarDados();
  }

  revelarResposta(){
    this.revelar = !this.revelar;
  }

  pegarDados() {
    this.revelar = false;
    this.http.get<Charada>(this.url).subscribe(
      resposta => {
         this.charada = resposta[0];
      }
    );
  }
}
