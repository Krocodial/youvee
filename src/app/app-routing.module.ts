import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";


import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { AboutComponent } from "./about/about.component";
import { QuizComponent } from "./quiz/quiz.component";
import { StatsComponent } from "./stats/stats.component";
import { DeviceComponent } from "./device/device.component";
import { ArtificialComponent } from "./artificial/artificial.component";

const routes: Routes = [

    
    { path: "", redirectTo: '/home', pathMatch: 'full' },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    //{ path: "home", component: HomeComponent },
    { path: "settings", component: SettingsComponent },
    { path: "about", component: AboutComponent },
    { path: "quiz", component: QuizComponent },
    { path: "stats", component: StatsComponent },
    { path: "device", component: DeviceComponent },
    { path: "artificial", component: ArtificialComponent }

    
    //{ path: "", redirectTo: "/(home:home//settings:settings//about:about//)", pathMatch: "full" },
    /*
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: NSEmptyOutletComponent, loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "settings", component: NSEmptfyOutletComponent, loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: "about", component: NSEmptyOutletComponent, loadChildren: "~/app/about/about.module#AboutModule" },
    { path: "quiz", component: NSEmptyOutletComponent, loadChildren: "~/app/quiz/quiz.module#QuizModule" }
    */
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }


/*{ path: "", redirectTo: "/(homeTab:home//settingsTab:settings//aboutTab:about//)", pathMatch: "full" },
    { path: "home", component: NSEmptyOutletComponent, loadChildren: "~/app/home/home.module#HomeModule", outlet: "homeTab" },
    {
        path: "settings",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/settings/settings.module#SettingsModule",
        outlet: "settingsTab"
    },
    {
        path: "about",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/about/about.module#AboutModule",
        outlet: "aboutTab"
    },
    { path: "quiz", loadChildren: "~/app/quiz/quiz.module#QuizModule" },
    { path: "score", loadChildren: "./score/score.module#ScoreModule" }*/