import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-create-prod',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule, FormsModule, HttpClientModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './create-prod.component.html',
  styleUrl: './create-prod.component.scss'
})
export class CreateProdComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
      description: [''],
    });
  }

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

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get description() {
    return this.productForm.get('description');
  }
}
