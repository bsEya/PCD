import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    FooterComponent,
    DetailsproductComponent,
    TestdetailsComponent,
 


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
