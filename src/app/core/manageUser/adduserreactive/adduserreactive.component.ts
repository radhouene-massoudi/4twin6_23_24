import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { User } from './../../../model/users';

@Component({
  selector: 'app-adduserreactive',
  templateUrl: './adduserreactive.component.html',
  styleUrls: ['./adduserreactive.component.css']
})
export class AdduserreactiveComponent {
  formuser:any;
@Output()addedUser=new EventEmitter<User>
constructor(private fb:FormBuilder, private s:UserService){

}
ngOnInit(){
  this.formuser=this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    surname:[''],
    adresse:[''],
    age:[]
  })
}
save(){
  this.s.addUser(this.formuser.value).subscribe(
    ()=>{
     // alert('added')
     this.addedUser.emit(this.formuser.value)
    }
  )
}
}
