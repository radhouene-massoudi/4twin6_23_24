import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../services/product.service';
import { literalMap } from '@angular/compiler';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  ListProduct: Product[]=[];
  selectlibelle: string | null=null;
  numberOfProducts: number[]=[]  ;
  constructor (private productService: ProductService) { }
  ngOnInit(): void {
      
    this.ListProduct = this.productService.getAllProducts();
  }


  calculateNumber(libelle: string): void {
    this.selectlibelle= libelle ; 
    this.numberOfProducts = [this.productService.getNbProductsLibelle(libelle)];
  }

}
