import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './mainfunctions/about-us/about-us.component';
import { ForgotPasswordComponent } from './mainfunctions/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './mainfunctions/auth/login/login.component';
import { RegisterComponent } from './mainfunctions/auth/register/register.component';
import { CartComponent } from './mainfunctions/cart/cart.component';
import { CheckoutComponent } from './mainfunctions/checkout/checkout.component';
import { ContactComponent } from './mainfunctions/contact/contact.component';



const routes: Routes = [
{
  path: 'login',
  component: LoginComponent 
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'checkout',
  component: CheckoutComponent
},
{
  path: 'cart',
  component: CartComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'forgot-password',
  component: ForgotPasswordComponent
},
{
  path:'about-us',
  component: AboutUsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
           


  exports: [RouterModule]
  
})
export class AppRoutingModule { }
