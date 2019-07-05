import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";


const routes: Routes = [
    { path: "", redirectTo: "/(homeTab:home/default//settingsTab:settings/default//profileTab:profile/default)", pathMatch: "full" },
    { path: "home", component: NSEmptyOutletComponent, loadChildren: "~/app/home/home.module#HomeModule", outlet: "homeTab" },
    {
        path: "settings",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/settings/settings.module#SettingsModule",
        outlet: "settingsTab"
    },
    {
        path: "profile",
        component: NSEmptyOutletComponent,
        loadChildren: "~/app/profile/profile.module#ProfileModule",
        outlet: "profileTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
