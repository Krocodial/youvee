import { Component, OnInit, TemplateRef } from "@angular/core";
import { config } from "../shared/configuration.model";
import { BluetoothService } from "../shared/bluetooth.service";
import { Bluetooth } from "../shared/bluetooth.model";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";
import { PeripheralService } from "./peripheral.service";
//import bluetooth = require('nativescript-bluetooth');
import * as bluetooth from "nativescript-bluetooth";
import { Observable } from "rxjs";


@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [BluetoothService],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    config: config;
    //deviceList;
    serviceList;
    groceryList: Array<Object> = [];
    opa: Array<Object> = [];
    deviceList: Array<Bluetooth>;
    device: Bluetooth;


    bluetoothEnabled = false;

    constructor(private bluetoothService: BluetoothService, private router: Router, private page: Page) {
        this.config = new config();
        //this.deviceList = [];
        this.serviceList = [];
        this.device = new Bluetooth();
    }

    ngOnInit() {
        //this.deviceList = this.bluetoothService.scan();
        //this.devices = this.bluetoothService.scan();
        
        this.page.actionBarHidden = true;
        
        bluetooth.isBluetoothEnabled().then(
            function(enabled) {
              console.log("Enabled? " + enabled);
            }
          );
        //this.perphs = this.peripheralService.getPeripherals();
        // Init your component properties here.
    }

    check() {
        //console.log(this.deviceList.length);
        this.deviceList.forEach((item) => {
            console.log(item);
        });
        console.log(this.serviceList.length);
    }

    async connect(uuid) {
        //var bluetooth = require("nativescript-bluetooth");
      
        bluetooth.isBluetoothEnabled().then(
            enabled => console.log("Enabled? " + enabled)
          );

        /*
        var services = bluetooth.connect({
            UUID: uuid,
            onConnected: function(peripheral) {
                console.log("Peripheral connected with UUID: " + peripheral.UUID);
                peripheral.services.forEach(function(service, services) {
                    this.serviceList.push(service);
                })
                return peripheral.services;
            }
        });
        */

        //console.log(services);



        /*this.serviceList = await this.bluetoothService.connect(uuid).then(function(services) {
            console.log("main " + services);
            return services;
        });
        console.log(this.serviceList);*/
    }

    scan() {

        this.bluetoothService.scan()
            .subscribe(
                (opa) => {
                    console.log(opa["_array"]);
                    this.deviceList = opa["_array"];
                    //alert("complete");
                    
                },
                () => {
                    alert("error");
                }
            );
    }

}
