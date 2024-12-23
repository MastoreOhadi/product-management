import {Component, Inject} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CommonModule,
    FormsModule,MatDialogModule,MatCardModule,RouterLink],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent {
  products: any[] = [];

  constructor(
    @Inject( MAT_DIALOG_DATA) public product: any,
    private productService: ProductService,
    public dialog:MatDialogRef<any>
    ) {}


  close() {
    this.dialog.close();
  }
}
