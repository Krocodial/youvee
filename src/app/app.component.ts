import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { BluetoothService } from "~/app/shared/bluetooth.service";
import { NotificationService } from "~/app/shared/notification.service";
//import { FileReaderService } from "~/app/shared/fileReader.service";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    providers: [BluetoothService, NotificationService],
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }
}
