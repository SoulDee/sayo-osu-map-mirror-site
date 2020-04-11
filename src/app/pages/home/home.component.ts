import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <map-search-container>
            <ads-box></ads-box>
        </map-search-container>
        <donation-card></donation-card>
    `
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
