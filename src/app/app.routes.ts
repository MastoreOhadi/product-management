import { Routes } from '@angular/router';
import {EditProductComponent} from "./product-list/dialog-edit-product/edit-product.component";
import {HomeComponent} from "./components/home/home.component";
import {CreateProductComponent} from "./product-list/dialog-create-product/create-product.component";

// import {AddProductComponent} from "./add-product/add-product.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ViewProductComponent} from "./product-list/view-product/view-product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {CreateProdComponent} from "./components/create-prod/create-prod.component";
import {EditProdComponent} from "./components/edit-prod/edit-prod.component";
import {ProdDetailsComponent} from "./components/prod-details/prod-details.component";

export const routes: Routes = [

  { path: '', component: HomeComponent }, // صفحه اصلی
  // { path: 'add-product', component: AddProductComponent }, // افزودن محصول
  { path: 'products', component: ProductListComponent },
  { path: 'prod-details/:id', component: ProdDetailsComponent }, // نمایش جزئیات محصول
  { path: 'edit-prod/:id', component: EditProdComponent }, // ویرایش محصول
  // { path: 'view-prod/:id', component: ViewProdtComponent },
  { path: 'create', component: CreateProdComponent }, // ایجاد محصول
  { path: '**', redirectTo: '' } // در صوری که مسیر اشتباه باشد، به صفحه اصلی هدایت شود




];
