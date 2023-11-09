import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowUsersComponent } from '../show-users/show-users.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { DetailUserComponent } from '../detail-user/detail-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { UpdateuserreactiveformComponent } from '../updateuserreactiveform/updateuserreactiveform.component';

const routes: Routes = [
  {path:'u/:id', component:UpdateuserreactiveformComponent},
    
  {path:'user', component:ShowUsersComponent, children:[
    {path:'add', component:AddUserComponent},
    {path:'detail/:id', component:DetailUserComponent},
    {path:'delete/:id', component:DeleteUserComponent},
    {path:'update', component:UpdateUserComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
