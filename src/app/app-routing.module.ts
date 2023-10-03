import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { DetailUserComponent } from './core/manageUser/detail-user/detail-user.component';
import { DeleteUserComponent } from './core/manageUser/delete-user/delete-user.component';
import { AddUserComponent } from './core/manageUser/add-user/add-user.component';
import { UpdateUserComponent } from './core/manageUser/update-user/update-user.component';
import { ShowUsersComponent } from './core/manageUser/show-users/show-users.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
  {path:'test',component:ListUserComponent},
  {path:'first', component:FirstComponent},
  
  {path:'user', component:ShowUsersComponent, children:[
    {path:'add', component:AddUserComponent},
    {path:'detail/:id', component:DetailUserComponent},
    {path:'delete/:id', component:DeleteUserComponent},
    {path:'update/:id', component:UpdateUserComponent},
  ]},
 
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
