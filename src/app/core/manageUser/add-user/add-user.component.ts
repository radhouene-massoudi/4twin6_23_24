import { Component } from '@angular/core';
import { User } from 'src/app/model/users';
import { UserService } from './../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private userservice:UserService){

  }
user=new User()
  showForm(f:any){
  console.log(f)
}
saveUser(u:User){
//add user
this.userservice.addUser(u).subscribe(
  ()=>{
    alert('added');
  }
);
}
}
