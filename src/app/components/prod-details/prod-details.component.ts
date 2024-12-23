import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'app-prod-details',
  standalone: true,
  imports: [ CommonModule,FormsModule, MatFormFieldModule,ReactiveFormsModule, MatInputModule, MatCardModule,MatDialogModule],
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.scss'
})
export class ProdDetailsComponent   implements OnInit{
  product:any;
  productId: number | null = null;

  constructor(

    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    // دریافت شناسه محصول از URL
    this.productId= Number(this.route.snapshot.paramMap.get('id'));

    if (this.productId) {
      this.loadProductData(this.productId);
    }

  }

  loadProductData(productId: number): void {
    this.product =this.productService.getProductById( productId);
  }
}
