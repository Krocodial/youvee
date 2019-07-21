import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { StatsRoutingModule } from "./stats-routing.module";
import { StatsComponent } from "./stats.component";

@NgModule({
    imports: [
        NativeScriptModule,
        StatsRoutingModule
    ],
    declarations: [
        StatsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class StatsModule { }
