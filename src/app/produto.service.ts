import { produtos, IProduto } from './produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos:IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtosId: number){
    return this.produtos.find(produto => produto.id === produtosId)
  }
}
