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
    

    constructor(private bluetoothService: BluetoothService) {
        this.connected = false;
    }

    ngOnInit(): void {
        this.bluetoothService.status.subscribe(value => { this.connected = value});
        
    }

    increase(amount) {
        this.bluetoothService.adjust(amount);
       
    }
    

}
