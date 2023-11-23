import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css']
})
export class ShowOneProductComponent implements OnChanges {
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
}
@Input()p:any;
@Output()notif=new EventEmitter();

sendDataToParent(produit:any){
this.notif.emit(produit.like)
//this.notif.emit(this.p)

}
}
