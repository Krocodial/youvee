import { Component, OnInit } from "@angular/core";
import { BluetoothService } from "../shared/bluetooth.service";
import { EventData } from "tns-core-modules/ui/page/page";
import { DrawerStateChangedEventArgs } from "nativescript-ui-sidedrawer";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "artificial", loadChildren: "./artificial/artificial.module#ArtificialModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Artificial",
    moduleId: module.id,
    templateUrl: "./artificial.component.html"
})
export class ArtificialComponent implements OnInit {
    connected;
    artificial;
    raw_percent;
    percent;
    

    constructor(private bluetoothService: BluetoothService) {
        this.connected = false;
        this.artificial = 0;
        this.percent = 0;
        this.raw_percent = 0;
        

    }

    ngOnInit(): void {
        this.bluetoothService.status.subscribe(value => { this.connected = value});
        this.bluetoothService.obs_percent.subscribe(value => { this.percent = value });
        this.bluetoothService.obs_artificial.subscribe(value => { this.artificial = value });
        this.bluetoothService.obs_raw_percent.subscribe(value => { this.raw_percent = value });
        
    }

    increase(amount) {
        this.bluetoothService.adjust(amount);
       
    }
    

}
