import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";

import { SettingsComponent } from "./settings.component";
import { QuizComponent } from "../quiz/quiz.component";

const routes: Routes = [
    { path: "", component: SettingsComponent, children: [
        {
            path: "quiz", 
            outlet: "quiz",
            component: NSEmptyOutletComponent,
            loadChildren: "~/app/quiz/quiz.module#QuizModule"
        }
    ] 
    }
    //{ path: "quiz", component: QuizComponent, outlet: "quiz" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SettingsRoutingModule { }
