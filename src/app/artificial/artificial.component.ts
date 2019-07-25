import { Component, OnInit } from "@angular/core";
import { BluetoothService } from "../shared/bluetooth.service";
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
    constructor(private bluetoothService: BluetoothService) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        console.log(this.bluetoothService.status);
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    

}
