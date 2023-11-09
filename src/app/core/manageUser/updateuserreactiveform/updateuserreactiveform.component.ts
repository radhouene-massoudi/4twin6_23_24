import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/users';

@Component({
  selector: 'app-updateuserreactiveform',
  templateUrl: './updateuserreactiveform.component.html',
  styleUrls: ['./updateuserreactiveform.component.css']
})
export class UpdateuserreactiveformComponent {
user!:any;
  constructor(private fb:FormBuilder,
     private s:UserService,
     private ac:ActivatedRoute
     ){
      

}
ngOnInit(){
  this.s.getUserById(this.ac.snapshot.params['id']).subscribe(
    (data)=>{
this.user=data;
this.formBuilder.patchValue(this.user)
    }
  );
   
  
}
formBuilder=this.fb.group(
  {
    
    name:[''],
    surname:[''],
    age:[],
    adresse:['']
  }
)
update(){
  this.s.updateUser(this.formBuilder.value,this.ac.snapshot.params['id']).subscribe(
    ()=>{
      alert('modification effectué');
      
    }
)}
}
