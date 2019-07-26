import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FileReaderService } from "~/app/shared/fileReader.service";

import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { AboutComponent } from "./about/about.component";
import { QuizComponent } from "./quiz/quiz.component";
import { RouterModule } from "@angular/router";
import { StatsComponent } from "./stats/stats.component";
import { DeviceComponent } from "./device/device.component";
import { ArtificialComponent } from "./artificial/artificial.component";

import { BluetoothService } from "./shared/bluetooth.service";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { BottomNavigationComponent } from "./shared/components/bottom-navigation.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule
        
    ],
    declarations: [
        AppComponent,
        BottomNavigationComponent,
        //HomeComponent,
        SettingsComponent,
        AboutComponent,
        QuizComponent,
        StatsComponent,
        DeviceComponent,
        ArtificialComponent
        //QuizComponent,
    ],
    providers: [
        BluetoothService
        //FileReaderService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
