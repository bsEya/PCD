import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCardComponent } from './product-card/product-card.component';

import path from 'path';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';


const routes: Routes = [
  {path:"navbar", component:NavbarComponent },
  {path:"product_Card",component:ProductCardComponent},
  {path:"footer",component:FooterComponent},
  {path:"productdetails",component:DetailsproductComponent},
  {path:"testdetails",component:TestdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
