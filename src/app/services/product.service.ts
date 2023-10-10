import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products: Product[]=[
        {id :1, code:123, libelle:'Pc',prix:2000,tauxTva:10},
        {id :2, code:456, libelle:'TV',prix:1000,tauxTva:20},
        {id :4, code:255, libelle:'Table',prix:200,tauxTva:30},
        {id :5, code:665, libelle:'Table',prix:200,tauxTva:30},
        {id :6, code:812, libelle:'Pc',prix:200,tauxTva:30},
        {id :7, code:121, libelle:'Pc',prix:200,tauxTva:30},
        {id :8, code:564, libelle:'TV',prix:200,tauxTva:30},




  ]
  constructor() { }

  getAllProducts(): Product[] {
    return this.Products;
  }

  getNbProductsLibelle(libelle:string):number{
    return this.Products.filter(product => product.libelle == libelle).length;
  }
}
