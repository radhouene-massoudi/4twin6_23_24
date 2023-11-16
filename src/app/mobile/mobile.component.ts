import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  
  listProdcut=[
    {id: 1, title: "mobile 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "mobile 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "mobile 3", price: 16, quantity: 8, like: 0}, ]

    showTV(tv:any){
tv.msg();    }
}
