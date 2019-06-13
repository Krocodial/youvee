import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        
        // Init your component properties here.
    }

    scan() {
        var bluetooth = require("nativescript-bluetooth");
        bluetooth.isBluetoothEnabled().then(
            function(enabled){
                console.log("Enabled? " + enabled);
                bluetooth.startScanning({
                    serviceUUIDs: [],
                    seconds: 4,
                    onDiscovered: function(peripheral){
                        console.log("Peripheral found with UUID: " + peripheral.UUID);
                        console.log("Peripheral's name: " + peripheral.name);
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
