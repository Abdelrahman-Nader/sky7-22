import { SignupComponent } from './compants/log/signup/signup.component';
import { LoginComponent } from './compants/log/login/login.component';
import { OurUsComponent } from './compants/our-us/our-us.component';
import { CardComponent } from './compants/card/card.component';
import { CallUsComponent } from './compants/call-us/call-us.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './compants/home/home.component';
import { LogoutComponent } from './compants/log/logout/logout.component';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './compants/products/products.component';
import { DetailsComponent } from './products/details/details.component';
import { FormValidationComponent } from './compants/form-validation/form-validation.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'call-us', component: CallUsComponent },
  { path: 'Card', component: CardComponent },
  { path: 'our-us', component: OurUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'form-validation', component: FormValidationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
