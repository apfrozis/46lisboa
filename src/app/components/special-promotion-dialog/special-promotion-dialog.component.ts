import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    description: string;
    promotion: string;
  }

@Component({
    selector: 'special-promotion-dialog',
    templateUrl: 'special-promotion-dialog.component.html',
    styleUrls: ['./special-promotion-dialog.component.scss']
  })
  export class SpecialPromotionDialog {
  
    constructor(
      public dialogRef: MatDialogRef<SpecialPromotionDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }