import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { CategoriasViewComponent } from './components/categorias-view/categorias-view.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:product-id', component: ProductsViewComponent },
  {path: 'categories', component: CategoriasListComponent},
  {path: 'categories/:category-id', component: CategoriasViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
