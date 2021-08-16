import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-promotions',
    templateUrl: './admin-promotions.component.html',
    styleUrls: ['./admin-promotions.component.scss']
})
export class AdminPromotionsComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    promotion_options = [{description: '5 %', value: 5},
    {description: '10 %', value: 10},
    {description: '15 %', value: 15},
    {description: '20 %', value: 20},
    {description: '25 %', value: 25},
    {description: '30 %', value: 30},
    {description: '35 %', value: 35},
    {description: '40 %', value: 40},
    {description: '45 %', value: 45},
    {description: '50 %', value: 50},
    {description: '55 %', value: 55},
    {description: '60 %', value: 60},
    {description: '65 %', value: 65},
    {description: '70 %', value: 70},
    {description: '75 %', value: 75},
    {description: '80 %', value: 80},
    {description: '85 %', value: 85},
    {description: '90 %', value: 90},
    {description: '95 %', value: 95},
    {description: '100 %', value: 100}]

    client_category_options = [ {description: 'Categoria 1', value: 'categoria_1'},
    {description: 'Categoria 2', value: 'categoria_2'},
    {description: 'Categoria 3', value: 'categoria_3'}
,{description: 'Categoria 4', value: 'categoria_4'}]
    constructor() { }

    ngOnInit() {}
}
