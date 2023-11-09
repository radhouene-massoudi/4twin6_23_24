import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DetailUserComponent } from '../detail-user/detail-user.component';
import { ShowUsersComponent } from '../show-users/show-users.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateuserreactiveformComponent } from '../updateuserreactiveform/updateuserreactiveform.component';


@NgModule({
  declarations: [
    DetailUserComponent,
    ShowUsersComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    UpdateuserreactiveformComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
