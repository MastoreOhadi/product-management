import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: true,
  imports: [CommonModule,
    FormsModule,MatDialogModule],
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrl: './confirm-delete-dialog.component.scss'
})
export class ConfirmDeleteDialogComponent {


  constructor(public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);  // تایید حذف
  }

  onCancel(): void {
    this.dialogRef.close(false);  // لغو حذف
  }
}

