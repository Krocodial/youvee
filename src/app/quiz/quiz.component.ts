import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { ActivatedRoute } from "@angular/router";
import { setNumber } from "tns-core-modules/application-settings";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { setTimeout } from "tns-core-modules/timer";
import { json } from "../shared/questions";


@Component({
    selector: "Quiz",
    moduleId: module.id,
    templateUrl: "./quiz.component.html"
})
export class QuizComponent implements OnInit {

    category;

	questions: { question: string, options: string[], correctAnswerIndex: number }[] = [];

	currentQuestionIndex: number = 0;
	score: number = 0;


	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private page: Page
	) {
		this.page.actionBarHidden = true;
	}

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
            this.category = json["categories"][0];
			this.questions = this.category['questions'];
		})
	}

	// -------------------------- QUIZ ----------------------------

	selectAnswer(answerIndex: number, args: any) {
        let option = <GridLayout>args.object;
        option.backgroundColor = '#EAD94C';
		/*if (this.questions[this.currentQuestionIndex].correctAnswerIndex == answerIndex) {
			// correct answer
			this.score += 1;
			option.backgroundColor = '#B6EB81';
		}
		else {
			// wrong answer
			option.backgroundColor = '#ff4b60';
		}*/
		setTimeout(
			() => {
				option.backgroundColor = '#4446FF';
				if (this.currentQuestionIndex == this.questions.length - 1) {
					this.end();
				}
				else {
					this.currentQuestionIndex += 1;
				}
			}, 500)
	}

	saveScore() {
		//let scorePercentage = Math.round(this.score * 100 / this.questions.length);
		//setNumber(this.category, scorePercentage);
	}

	end() {
		this.saveScore();
		this.navigateToScore();
	}

	getRows(question) {
		var rows = '';
		//console.log(question);
		question.forEach(element => {
			rows = rows + '*, ';
		});
		return rows;
	}

	getCols(question) {
		var cols = '';
		//console.log(question.color);
		question.color.forEach(element => {
			cols = cols + '*, ';
		});
		return cols;
	}

    genRows(item) {
        //console.log(item);
        //return item.options.length;
        return 4;
    }
//'background: linear-gradient(to right,' + getColor(item) + ');'
    getColor(item) {
        if (item.color) {
			//return item.color;
			//return "background: linear-gradient(to right, #f1c27d);";//
			return item.color;
        } else {
            return '#51A3A3';
            return '#4446ff';
        }
    }

	// ------------------------- NAVIGATION -----------------------------

	navigateToScore() {
        this.routerExtensions.navigate(['/settings'], { clearHistory: true });
		/*let navigationExtras = {
			queryParams: {
				'score': Math.round(this.score * 100 / this.questions.length)l
			}
        };
        
		this.routerExtensions.navigate(["/score"], navigationExtras);*/
	}

	/*navigateToPrevious() {
		this.routerExtensions.backToPreviousPage();
    }*/


   
}