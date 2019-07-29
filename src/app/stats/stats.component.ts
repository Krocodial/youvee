import { Component, OnInit } from '@angular/core';

@Component({
    selector: "Stats",
    moduleId: module.id,
    templateUrl: "./stats.component.html",
    providers: []
})
export class StatsComponent implements OnInit {
    favoriteFruits;

    constructor() {
        this.favoriteFruits  = [
            { type: "Febuary", count: 50},
            { type: "March", count: 7 },
            { type: "April", count: 15 },
            { type: "May", count: 12 },
            { type: "June", count: 30 },
            { type: "July", count: 16 }
        ]
    }

    ngOnInit(): void {
    }
}
