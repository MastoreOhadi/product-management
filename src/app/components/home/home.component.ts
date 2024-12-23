import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import {Router, RouterLink} from "@angular/router";
import {ConfirmDeleteDialogComponent} from "../../product-list/confirm-delete-dialog/confirm-delete-dialog.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {EditProductComponent} from "../../product-list/dialog-edit-product/edit-product.component";
import {ViewProductComponent} from "../../product-list/view-product/view-product.component";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    RouterLink,MatDialogModule,ConfirmDeleteDialogComponent, MatIconModule,

  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  displayedColumns: string[] = ['name', 'price', 'description', 'actions'];

  constructor(private productService: ProductService, private dialog: MatDialog,private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
    this.initializeSampleData(); // برای اطمینان از وجود داده‌های نمونه
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  deleteProduct(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(id);
        this.loadProducts();  // لیست محصولات به‌روزرسانی می‌شود
      }
    });
  }

  editProduct(product: any): void {
    // اینجا می‌توانید عملیات ویرایش را انجام دهید
    // console.log('Editing product:', product);

      const dialogRef = this.dialog.open(EditProductComponent,{
        data: product

      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log(result)
          if (result.id) {
            this.productService.updateProduct(result);
          }else {
            this.productService.addProduct(result);

          }
        }
          this.loadProducts();  // لیست محصولات به‌روزرسانی می‌شود
        }
      );

  }
  // تغییرات در کد:
  viewProduct(product: any): void {
    // this.router.navigate(['/view-product', id]);


    const dialogRef = this.dialog.open( ViewProductComponent,
      {
        height:'220px',
        width:'400px',
        data:product});

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     // this.productService.deleteProduct(id);
    //     this.loadProducts();  // لیست محصولات به‌روزرسانی می‌شود
    //   }
    // });
  }

  private initializeSampleData(): void {
    const existingProducts = this.productService.getProducts();
    if (existingProducts.length === 0) {
      localStorage.setItem(
        'products',
        JSON.stringify([
          { id: 1, name: 'Product 1', price: 100, description: 'Description 1' },
          { id: 2, name: 'Product 2', price: 200, description: 'Description 2' },
          { id:3, name: 'Product 3', price: 300, description: 'Description 3' },
          { id: 4, name: 'Product 4', price: 400, description: 'Description 4' }
        ])
      );
    }
  }


  openFormDialog() {
   this.editProduct({})

  }
}
