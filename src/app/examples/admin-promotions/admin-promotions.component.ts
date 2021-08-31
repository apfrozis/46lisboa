import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-promotions',
    templateUrl: './admin-promotions.component.html',
    styleUrls: ['./admin-promotions.component.scss']
})
export class AdminPromotionsComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;
    selectedCategory = ''

    promotions = [{src: "../../../assets/img/creators.jpg", description: "Get discount for your next visit", value: "5",
    small_description: "First promotion", category: 'Categoria 5'},
    {src: "../../../assets/img/dreamers.jpg", description: "Get discount for your next visit", value: "25",
    small_description: "Second promotion", category: 'Categoria 25'},
    {src: "../../../assets/img/drinkers.jpg", description: "Get discount for your next visit", value: "50",
    small_description: "Third promotion", category: 'Categoria 50'}]

    client_category_options = [{ description: '', value: '' },
    { description: 'Categoria 5', value: 'categoria_5' },
    { description: 'Categoria 10', value: 'categoria_10' },
    { description: 'Categoria 25', value: 'categoria_25' },
    { description: 'Categoria 50', value: 'categoria_50' },
    { description: 'Categoria 100', value: 'categoria_100' }]
    constructor() { }

    ngOnInit() { }

    selectChangeHandler(event: any) {
        this.selectedCategory = event.target.value.split('_')[1] + " %";
    }

    getStyle(index) {
        if ((index % 2) == 1) {
            return {'margin-left': '10px'}
        } else {
            return {}
        }
    }
}
