import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListusersComponent } from './listusers/listusers.component';
import { ListUserComponent } from './list-user/list-user.component';
import { BackgroundColorChangeDirective } from './background-color-change.directive';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { LoginComponent } from './core/manageUser/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthModule } from './core/manageUser/auth/auth.module';
import { MangeProductModule } from './core/mange-product/mange-product.module';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { MainInvoiceComponent } from './Atelier3/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './Atelier3/invoice-list/invoice-list.component';
import { InvoiceComponent } from './Atelier3/invoice/invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import { UpdateuserInputComponent } from './core/manageUser/updateuser-input/updateuser-input.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { MsgerrorsComponent } from './shared/msgerrors/msgerrors.component';
import { AddproductComponent } from './revision/addproduct/addproduct.component';
import { HomeComponent } from './revision/home/home.component';
import { ShoppingcartComponent } from './revision/shoppingcart/shoppingcart.component';
import { UpdateProductComponent } from './revision/update-product/update-product.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ListusersComponent,
    ListUserComponent,
    BackgroundColorChangeDirective,
    NotfoundComponent,
    LoginComponent,
    NavbarComponent,
    C1Component,
    C2Component,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    TvComponent,
    MobileComponent,
    ShowOneProductComponent,
    ChildComponent,
    ParentComponent,
    AddproductComponent,
    HomeComponent,
    ShoppingcartComponent,
    UpdateProductComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    MangeProductModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
