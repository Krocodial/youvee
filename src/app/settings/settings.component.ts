import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { getNumber } from "tns-core-modules/application-settings";
import { FileReaderService } from "../shared/fileReader.service";
//let json = require("../shared/questions");
import { json } from "../shared/questions";


@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    categories: any[] = [];

    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page,
        private fileReader: FileReaderService
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.getCategories();
     
    }

    getCategories() {

        this.categories = json["categories"];
        this.initializeScore();

        /*this.fileReader.readJSON("./questions.json").then(
            res => {
                console.log('hereo');
                this.categories = res["categories"];
                this.initializeScore();
                console.log(this.categories);
            },
            err => {
                console.log('err');
                console.log('Error reading json: ' + JSON.stringify(err));
            }
        )*/
    }

    initializeScore() {
        for (let i = 0; i < this.categories.length; i++) {
            this.categories[i].lastScore = getNumber(this.categories[i].title) || '0';
        }
    }

    navigateToQuiz(index: number) {
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        this.routerExtensions.navigate(["/quiz"], navigationExtras);
    }
}