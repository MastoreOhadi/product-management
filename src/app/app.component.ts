import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {EditProductComponent} from "./product-list/dialog-edit-product/edit-product.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,RouterModule, MatFormFieldModule,ReactiveFormsModule,EditProductComponent,MatDialogModule,
    RouterModule, MatCardModule,
    MatInputModule ,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppComponent {



}
