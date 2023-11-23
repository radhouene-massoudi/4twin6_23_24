import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from './../../../model/users';


@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  show=false;
  showFormAdd=false;
  usertoSelected!:User;
constructor(private service:UserService){
}
users!:User[];
ngOnInit(): void {
    this.service.getUserList().subscribe(
      (d)=>{
        //console.log(d)
        this.users=d;
        
      }
    )
   
}

update(us:User){
  this.show=true;
this.usertoSelected=us
}

traitemenet(t:any){
  this.show=!this.show
}

changeTab(e:any){
  this.show=false;
  for(let i=0;i<this.users.length;i++){
    if(this.users[i].id==e.id){
      this.users[i]=e;
    }
  }
}
addUser(){
  this.showFormAdd=true
}

addElementToTab(e:any){
this.users.push(e)
}
}
