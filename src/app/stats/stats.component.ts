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
            { type: "🍎", count: 7 },
            { type: "🍌", count: 15 },
            { type: "🍍", count: 12 },
            { type: "🍒", count: 30 },
            { type: "🍇", count: 16 }
        ]
    }

    ngOnInit(): void {
    }
}
