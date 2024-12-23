import {Component, OnInit} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [MatTableModule,MatButtonModule, CommonModule,FormsModule,HttpClientModule, MatFormFieldModule,ReactiveFormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
  providers:[ProductService]
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],  // نام محصول نمی‌تواند خالی باشد
      price: [null, [Validators.required, Validators.min(1)]],  // قیمت باید عدد مثبت باشد
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value);  // ارسال داده‌ها به سرویس برای ذخیره در LocalStorage
      this.productForm.reset();  // بازنشانی فرم
    }
  }

  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }
  get description() { return this.productForm.get('description'); }
}
