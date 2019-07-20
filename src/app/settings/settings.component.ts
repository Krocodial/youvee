import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
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
        private activeRoute: ActivatedRoute,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        //this.routerExtensions.navigate([{ outlets: {quiz: ['quiz']}}], {relativeTo: this.activeRoute });
        this.getCategories();
     
    }

    getCategories() {

        this.categories = json["categories"];
        this.initializeScore();
    }

    initializeScore() {
        for (let i = 0; i < this.categories.length; i++) {
            this.categories[i].lastScore = getNumber(this.categories[i].title) || '0';
        }
    }

    navigateToQuiz(index: number) {
        
        //this.routerExtensions.navigate(['quiz'], { relativeTo: this.activeRoute});
        /*console.log('navigating');
        let navigationExtras = {
            queryParams: {
                'category': this.categories[index].title,
                'questions': JSON.stringify(this.categories[index].questions)
            }
        };
        console.log(navigationExtras);*/
        //this.routerExtensions.navigate(['/quiz'], navigationExtras);
    }
}