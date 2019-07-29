import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ScoreRoutingModule } from "./score-routing.module";
import { ScoreComponent } from "./score.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ScoreRoutingModule
    ],
    declarations: [
        //ScoreComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScoreModule { }
