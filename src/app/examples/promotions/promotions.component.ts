import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SpecialPromotionDialog } from '../../components/special-promotion-dialog/special-promotion-dialog.component';

@Component({
    selector: 'app-promotions',
    templateUrl: './promotions.component.html',
    styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    nomeCliente = 'João Ferreira'


    promotions = [{src: "../../../assets/img/creators.jpg", description: "Get discount for your next visit", value: "5",
    small_description: "First promotion", category: 'Categoria 5'},
    {src: "../../../assets/img/dreamers.jpg", description: "Get discount for your next visit", value: "25",
    small_description: "Second promotion", category: 'Categoria 25'},
    {src: "../../../assets/img/drinkers.jpg", description: "Get discount for your next visit", value: "50",
    small_description: "Third promotion", category: 'Categoria 50'}]


    constructor(public dialog: MatDialog) { }

    ngOnInit() {
        this.openDialog()
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(SpecialPromotionDialog, { height: '50%',
            data: {description: "You've been eligible for a new promotion. Please show this message to a staff member.",
            promotion: '50 %', imageSource: "../../../assets/img/46_front.jpg"}
          });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }

}
