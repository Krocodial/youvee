import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
        AboutRoutingModule,
    ],
    declarations: [
        AboutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutModule { }
