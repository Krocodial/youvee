import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";

import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { BluetoothService } from "~/app/shared/bluetooth.service";
import { NotificationService } from "~/app/shared/notification.service";
//import { FileReaderService } from "~/app/shared/fileReader.service";

import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    providers: [BluetoothService, NotificationService],
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;


    constructor(private router: Router,
        private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        console.log(navItemRoute);
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            },
            clearHistory: true
        });

        
    }
    

}
