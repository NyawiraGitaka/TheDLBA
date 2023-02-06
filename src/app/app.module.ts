import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './appcore/common/header/header.component';
import { FooterComponent } from './appcore/common/footer/footer.component';
import { RegisterComponent } from './mainfunctions/auth/register/register.component';
import { LoginComponent } from './mainfunctions/auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './mainfunctions/cart/cart.component';
import { CheckoutComponent } from './mainfunctions/checkout/checkout.component';
import { ForgotPasswordComponent } from './mainfunctions/auth/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './mainfunctions/auth/update-password/update-password.component';
import { ContactComponent } from './mainfunctions/contact/contact.component';
import { WishlistComponent } from './mainfunctions/wishlist/wishlist.component';
import { AboutUsComponent } from './mainfunctions/about-us/about-us.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent,
    ContactComponent,
    WishlistComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
