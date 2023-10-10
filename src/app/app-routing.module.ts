import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';

const routes: Routes = [
 // {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'login',component:LoginComponent},
  {path:'test',component:ListUserComponent},
  {path:'first', component:FirstComponent},
  
  {path:'p',loadChildren:()=>import('../app/core/manageUser/auth/auth.module').then((t)=>t.AuthModule)},
 
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
