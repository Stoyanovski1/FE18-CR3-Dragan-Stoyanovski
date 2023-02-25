import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuListComponent } from './menu-list/menu-list.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
  },
  {
    path: "about-us", component: AboutUsComponent,
  },
  {
    path: "products", component: MenuListComponent,
  },
  {
    path: "cart", component: CartComponent,
  },
  {
    path: "products/:id", component: MenuDetailsComponent
  },
  {
    path: "**", redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }