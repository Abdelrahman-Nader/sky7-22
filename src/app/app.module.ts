import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './compants/home/home.component';
import { OurUsComponent } from './compants/our-us/our-us.component';
import { ProductsComponent } from "./compants/products/ProductsComponent";
import { CallUsComponent } from './compants/call-us/call-us.component';
import { CardComponent } from './compants/card/card.component';
import { LoginComponent } from './compants/log/login/login.component';
import { LogoutComponent } from './compants/log/logout/logout.component';
import { SignupComponent } from './compants/log/signup/signup.component';
import { NavBarComponent } from './nav-bar/navbar.component';
import { SpinnerComponent } from './compants/spinner/spinner.component';

@NgModule({
  declarations: [
    NavBarComponent,
    AppComponent,
    HomeComponent,
    OurUsComponent,
    ProductsComponent,
    CallUsComponent,
    CardComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    SpinnerComponent,
    SpinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
