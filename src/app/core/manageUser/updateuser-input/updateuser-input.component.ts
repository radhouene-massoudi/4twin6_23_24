import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/users';

@Component({
  selector: 'app-updateuser-input',
  templateUrl: './updateuser-input.component.html',
  styleUrls: ['./updateuser-input.component.css']
})
export class UpdateuserInputComponent {
@Input()user:User= new User();
@Output()notif=new EventEmitter();

showForm(){
  this.notif.emit('bonjour')
}
}
