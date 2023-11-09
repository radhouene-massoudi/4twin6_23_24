import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
name=new FormControl('',Validators.required);
surname=new FormControl('');
showForm(){
  console.log(this.name)
}
fg=new FormGroup({
  namefg:new FormControl('',[Validators.required, Validators.minLength(3)]),
  surnamefg: new FormControl(),
  email:new FormControl(''),
})
showFromFG(){
  console.log(this.fg)
}

get namefgE(){
return this.fg.get('namefg')
}
constructor(private fb:FormBuilder){

}
formb=this.fb.group({
  namefb:['',],
  surnamefb:['',],
  emailfb:[''],
  skills:this.fb.array([
    new FormControl('Angular'),
    new FormControl('react')
  ])

})

addElement(){
  this.formb.controls['skills'].push( new FormControl(''))
}
removeElement(index:any){
  this.formb.controls['skills'].removeAt(index)
}
get Skills(){
  return this.formb.get('skills') as FormArray
}
}
