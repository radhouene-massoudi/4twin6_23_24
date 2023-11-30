import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from '../model/category';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  vF:any;
constructor(private s:ProductService,private Fb:FormBuilder){

}
fg=this.Fb.group({
  id:[],
  name:['',[Validators.required]],
  price:[''],
  description:[''],
  category:[''],

})
submit(){
  this.s.fetchCatById(this.fg.value.category).subscribe(
    (data)=>{
     this.vF= this.fg.value;
this.vF.category=data;
      //this.cat?.setValue(data)
      
      this.s.addProduct(this.vF).subscribe(
        ()=>{
          alert('added')
        }
      )
    }
  )
  
}
get cat(){
  return this.fg.get('category')
}
}
