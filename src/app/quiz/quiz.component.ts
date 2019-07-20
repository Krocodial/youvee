import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Quiz",
    moduleId: module.id,
    templateUrl: "./quiz.component.html"
})
export class QuizComponent implements OnInit {

    categories: any[] = [];

    constructor(
        private routerExtensions: RouterExtensions,
        private page: Page
    ) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
    
    }

   
}