import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import {C1Component} from "./c1/c1.component";
import {C2Component} from "./c2/c2.component";
import { ShowUsersComponent } from './core/manageUser/show-users/show-users.component';
import { DetailUserComponent } from './core/manageUser/detail-user/detail-user.component';
import {DeleteUserComponent} from "./core/manageUser/delete-user/delete-user.component";

const routes: Routes = [
 // {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
  {path:'c1',component:C1Component},
  {path:'c2',component:C2Component},
  {path:'test',component:ListUserComponent},
  {path:'first', component:FirstComponent},
  {path:'users', component:ShowUsersComponent},
  {path:'user/:id', component:DetailUserComponent},
  {path:'remove/:id', component:DeleteUserComponent},
  {path:'p',loadChildren:()=>import('../app/core/manageUser/auth/auth.module').then((t)=>t.AuthModule)},

  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
