import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";

const routes: Routes = [
  //eagerly loaded home
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },

  //lazy module loading
  {
    path: "customers",
    loadChildren: () =>
      import("../app/customers/customers.module").then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: "orders",
    loadChildren: () =>
      import("../app/orders/orders.module").then((m) => m.OrdersModule),
  },



  //preloading technology and products component

  { path: 'products', data: { preload: true }, loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

  // wildcard routing
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // {
    //   //load preload all modules
    //   preloadingStrategy: PreloadAllModules
    // }
  )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
