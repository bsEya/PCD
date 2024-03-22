import { ComponentbComponent } from './componentb/componentb.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { ComponentaComponent } from './componenta/componenta.component';

import path from 'path';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { TestdetailsComponent } from './testdetails/testdetails.component';


const routes: Routes = [
  {path:"navbar", component:NavbarComponent },
  {path:"product_Card",component:ProductCardComponent},
  {path:"footer",component:FooterComponent},
  {path:"productdetails",component:DetailsproductComponent},
  {path:"testdetails",component:TestdetailsComponent},
  {path:"newcompent",component:NewcompComponent},
    {path:"componenta",component:ComponentaComponent},

  {path:"componentb",component:ComponentbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
