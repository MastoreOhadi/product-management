import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ CommonModule,FormsModule, MatFormFieldModule,ReactiveFormsModule, MatCardModule,MatFormFieldModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: any = null;
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // دریافت ID محصول از URL
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.loadProductDetails(this.productId);
    }
  }

  loadProductDetails(id: string): void {
    // دریافت داده‌های محصول از LocalStorage
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find((p: any) => p.name === id);
    if (product) {
      this.product = product;
    } else {
      // اگر محصول یافت نشد، پیامی نمایش داده شود
      console.error('Product not found');
    }
  }
}
