import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { DeviceRoutingModule } from "./device-routing.module";
import { DeviceComponent } from "./device.component";

@NgModule({
    imports: [
        NativeScriptModule,
        DeviceRoutingModule
    ],
    declarations: [
        DeviceComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DeviceModule { }
