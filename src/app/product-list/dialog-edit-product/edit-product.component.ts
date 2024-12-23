import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ CommonModule,FormsModule, MatFormFieldModule,ReactiveFormsModule, MatInputModule, MatCardModule,MatDialogModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
  providers:[ProductService],
})
export class EditProductComponent implements OnInit{
  productForm!: FormGroup;
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog:MatDialogRef<any>,
    @Inject( MAT_DIALOG_DATA) public product: any,

  ) {
    // مقداردهی اولیه فرم
    this.productForm = this.fb.group({
      id:null,
      name: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(1)]],
      description: ['']
    });
  }
  //
  // ngOnInit(): void {
  //   // دریافت شناسه محصول از URL
  //   this.productId = this.route.snapshot.paramMap.get('id');
  //
  //   if (this.productId) {
  //     this.loadProductData(this.productId);
  //   }
  // }

  // loadProductData(productId: string): void {
  //   // دریافت محصول از LocalStorage بر اساس شناسه
  //   const products = JSON.parse(localStorage.getItem('products') || '[]');
  //   const product = products.find((p: any) => p.name === productId);
  //
  //   if (product) {
  //     this.productForm.patchValue({
  //       name: product.name,
  //       price: product.price,
  //       description: product.description
  //     });
  //   }
  // }

  saveProduct(): void {
    if (this.productForm.valid) {
      // const updatedProduct = this.productForm.value;
      //
      // // ذخیره تغییرات در LocalStorage
      // const products = JSON.parse(localStorage.getItem('products') || '[]');
      // const index = products.findIndex((p: any) => p.name === this.productId);
      //
      // if (index !== -1) {
      //   products[index] = updatedProduct;
      //   localStorage.setItem('products', JSON.stringify(products));
      // }
      this.dialog.close(this.productForm.value);  // تایید حذف

      // this.router.navigate(['/']); // هدایت به صفحه اصلی بعد از ذخیره
    }
  }

  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }
  get description() { return this.productForm.get('description'); }



  cancel() {
    this.dialog.close(null);
  }

  ngOnInit(): void {
    console.log(this.product)
    this.productForm.patchValue({
      id:this.product.id,
      name:this.product.name,
      price:this.product.price,
      description:this.product.description
    });
  }
}
