import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-edit-prod',
  standalone: true,
  imports: [ CommonModule,FormsModule, MatFormFieldModule,ReactiveFormsModule, MatInputModule, MatCardModule,MatDialogModule],
  templateUrl: './edit-prod.component.html',
  styleUrl: './edit-prod.component.scss'
})
export class EditProdComponent implements OnInit{
  productForm!: FormGroup;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
) {
    // مقداردهی اولیه فرم
    this.productForm = this.fb.group({
      id:null,
      name: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.min(1)]],
      description: ['']
    });
  }

  ngOnInit(): void {
    // دریافت شناسه محصول از URL
    this.productId= Number(this.route.snapshot.paramMap.get('id'));

    if (this.productId) {
      this.loadProductData(this.productId);
    }
  }

  loadProductData(productId: number): void {
    let product =this.productService.getProductById( productId);
    if (product) {
      this.productForm.patchValue({
        id:product.id,
        name: product.name,
        price: product.price,
        description: product.description
      });
    }
  }

  saveProduct(): void {
    if (this.productForm.valid) {
    this.productService.updateProduct( this.productForm.value);
    this.router.navigate(['/']); // هدایت به صفحه اصلی بعد از ذخیره
  }
}
  get name() { return this.productForm.get('name'); }
  get price() { return this.productForm.get('price'); }
  get description() { return this.productForm.get('description'); }

  cancel() {
    this.router.navigate(['/']); //
  }

}
