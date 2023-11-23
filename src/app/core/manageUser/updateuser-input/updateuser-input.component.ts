import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/app/model/users';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-updateuser-input',
  templateUrl: './updateuser-input.component.html',
  styleUrls: ['./updateuser-input.component.css']
})
export class UpdateuserInputComponent implements OnChanges{

@Input()user =new User();
@Output()notif=new EventEmitter();
@Output()updateUser=new EventEmitter()
constructor(private s:UserService){

}
ngOnInit(){

}
showForm(){
  this.notif.emit('bonjour')
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes)
}

update(updateUser:any){
this.s.updateUser(updateUser,this.user?.id).subscribe(
  (res)=>{
this.updateUser.emit(updateUser)
  }
)
}
}
