import { Component, OnInit, TemplateRef } from "@angular/core";
import { config } from "../shared/configuration.model";
import { BluetoothService } from "../shared/bluetooth.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    providers: [BluetoothService],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    config: config;

    constructor(private bluetoothService: BluetoothService) {
        this.config = new config();
    }

    ngOnInit(): void {
        //this.perphs = this.peripheralService.getPeripherals();
        // Init your component properties here.
    }

    scan(perphs) {
        var bluetooth = require("nativescript-bluetooth");
        bluetooth.isBluetoothEnabled().then(
            function(enabled){
                console.log("Enabled? " + enabled);
                bluetooth.startScanning({
                    serviceUUIDs: [],
                    seconds: 4,
                    onDiscovered: function(periph){
                        console.log("Periphera found with UUID: " + periph.UUID);
                        console.log("Periphera's name: " + periph.name);
                        
                    }
                }).then(function() {
                    
                    console.log("scanning complete");
                }, function(err) {
                    console.log("error while scanning: " + err);
                });
            },
        );
    }

}
