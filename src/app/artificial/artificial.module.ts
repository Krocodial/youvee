import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ArtificialRoutingModule } from "./artificial-routing.module";
import { ArtificialComponent } from "./artificial.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ArtificialRoutingModule
    ],
    declarations: [
        //ArtificialComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ArtificialModule { }
