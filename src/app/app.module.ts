import { OrderComponent } from './shared/order/order.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './compants/home/home.component';
import { OurUsComponent } from './compants/our-us/our-us.component';
import { CallUsComponent } from './compants/call-us/call-us.component';
import { CardComponent } from './compants/card/card.component';
import { LoginComponent } from './compants/log/login/login.component';
import { LogoutComponent } from './compants/log/logout/logout.component';
import { SignupComponent } from './compants/log/signup/signup.component';
import { NavBarComponent } from './nav-bar/navbar.component';
import { SpinnersComponent } from './spinner/spinners/spinners.component';
import { ProductsComponent } from './compants/products/products.component';
import { SelectComponent } from './shared/select/select.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './products/details/details.component';
import { FormValidationComponent } from './compants/form-validation/form-validation.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StyleDirective } from './Dirctive/style.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NavBarComponent,
    AppComponent,
    HomeComponent,
    OurUsComponent,
    CallUsComponent,
    CardComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    SpinnersComponent,
    ProductsComponent,
    SelectComponent,
    SingleProductComponent,
    DetailsComponent,
    FormValidationComponent,
    OrderComponent,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
