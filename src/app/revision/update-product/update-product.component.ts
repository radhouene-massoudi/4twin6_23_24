import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  valueOfForm:any;
  constructor(private s:ProductService,private Fb:FormBuilder,private ac:ActivatedRoute){

  }
  fg=this.Fb.group({
    id:[],
    name:['',[Validators.required]],
    price:[''],
    description:[''],
    category:[''],
  
  })
  ngOnInit() {
    
    this.s.fetchProductById(this.ac.snapshot.params['id']).subscribe(
      (res)=>{
        
        this.valueOfForm=res;
        this.valueOfForm.category=res.category.id;
        this.fg.patchValue(this.valueOfForm);
      }
    )
  }
  update(){
    this.s.fetchCatById(this.fg.value.category).subscribe(
      (data)=>{
      
 
        //this.cat?.setValue(data)
        
        this.s.updateProduct(this.fg.value,this.ac.snapshot.params['id']).subscribe(
          ()=>{
            alert('updated')
          }
        )
      },
      (error)=>{
        alert("id cat doesn't exist")

      }
    )
    
  }
}
