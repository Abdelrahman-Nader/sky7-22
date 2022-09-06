// import { ProductsComponent } from "./compants/products/products.component";
import { SignupComponent } from './compants/log/signup/signup.component';
import { LoginComponent } from './compants/log/login/login.component';
import { OurUsComponent } from './compants/our-us/our-us.component';
import { CardComponent } from './compants/card/card.component';
import { CallUsComponent } from './compants/call-us/call-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compants/home/home.component';
import { LogoutComponent } from './compants/log/logout/logout.component';
import { NgModule } from '@angular/core';
import { Products2Component } from "./compants/products2/Products2Component.1";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'call-us', component: CallUsComponent },
  { path: 'Card', component: CardComponent },
  { path: 'our-us', component: OurUsComponent },
  { path: 'products', component: Products2Component },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
