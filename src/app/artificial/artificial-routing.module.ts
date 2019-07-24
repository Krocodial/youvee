import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ArtificialComponent } from "./artificial.component";

const routes: Routes = [
    { path: "", component: ArtificialComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ArtificialRoutingModule { }
