import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "score", loadChildren: "./score/score.module#ScoreModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Score",
    moduleId: module.id,
    templateUrl: "./score.component.html"
})
export class ScoreComponent implements OnInit {
    score: number;
    type = '';
    blurb = '';

	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.score = params['score'];
        })
        if(this.score < 7) {
            this.type = "Type I";
            this.blurb = "Extremely sensitive skin, always burns, never tans.\n Youvee will use this information to calculate your UV Absorption and Time To Burn. \
            If you would like to redo the quiz, you may do so in the settings. Time for some Fun in the Sun!"
        } else if (this.score < 14 && this.score > 6) {
            this.type = "Type II";
            this.blurb = "Very sensitive skin, burns easily, tans minimally.\n Youvee will use this information to calculate your UV Absorption and Time To Burn. \
            If you would like to redo the quiz, you may do so in the settings. Time for some Fun in the Sun!"
        } else if (this.score < 21 && this.score > 13) {
            this.type = "Type III";
            this.blurb = "Sensitive skin, sometimes burns, slowly tans to light brown.\n Youvee will use this information to calculate your UV Absorption and Time To Burn. \
            If you would like to redo the quiz, you may do so in the settings. Time for some Fun in the Sun!"
        } else if (this.score < 28 && this.score > 20) {
            this.type = "Type IV";
            this.blurb = "Mildly sensitive, burns minimally, always tans to moderate brown.\n Youvee will use this information to calculate your UV Absorption and Time To Burn. \
            If you would like to redo the quiz, you may do so in the settings. Time for some Fun in the Sun!"
        } else if (this.score < 35 && this.score > 27) {
            this.type = "Type V";
            this.blurb = "Resistant skin, rarely burns, tans well.\n Youvee will use this information to calculate your UV Absorption and Time To Burn. \
            If you would like to redo the quiz, you may do so in the settings. Time for some Fun in the Sun!"
        } else if (this.score > 35) {
            this.type = "Type VI";
            this.blurb = "Very resistant skin, never burns, deeply pigmented.\n Youvee will use this information to calculate your UV Absorption and Time To Burn. \
            If you would like to redo the quiz, you may do so in the settings. Time for some Fun in the Sun!"
        }
	}

	navigateToHome() {
		this.routerExtensions.navigate(["/home"], { clearHistory: true });
	}
}
