import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'loiane.com';
  cursoAngular = true;
  urlImagem = 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador%20Imagem%20%234Devs&tamanho_fonte=10';

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';

  // tslint:disable-next-line: typedef
  getValor(){
    return 1;
  }

  // tslint:disable-next-line: typedef
  getCurtiCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  OnMouseOverOut(){
    this.isMouseOver = !this.isMouseOver


  }

  constructor() { }

  ngOnInit(): void {
  }

}
