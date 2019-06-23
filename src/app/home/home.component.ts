import { Component, OnInit, TemplateRef } from "@angular/core";
import { config } from "../shared/configuration.model";
import { BluetoothService } from "../shared/bluetooth.service";
import { Bluetooth } from "../shared/bluetooth.model";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [BluetoothService],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    config: config;
    deviceList;
    groceryList: Array<Object> = [];
    opa: Array<Object> = [];

    constructor(private bluetoothService: BluetoothService, private router: Router, private page: Page) {
        this.config = new config();
        this.deviceList = [];
    }

    ngOnInit() {
        //this.deviceList = this.bluetoothService.scan();
        //this.devices = this.bluetoothService.scan();
        
        this.page.actionBarHidden = true;
        

        //this.perphs = this.peripheralService.getPeripherals();
        // Init your component properties here.
    }

    check() {
        console.log(this.deviceList.length);
        this.deviceList.forEach((item) => {
            console.log(item);
        });
    }

    async scan() {
        this.deviceList = await this.bluetoothService.scan().then(function(devices) {
            console.log('test');
            //console.log(devices);
            return devices;
        });
        console.log(this.deviceList);

        //console.log('-------------------------------------------------\n' + devs.length);
        
        //var test = this.bluetoothService.scan(); 
        //console.log(test);
    }

}
