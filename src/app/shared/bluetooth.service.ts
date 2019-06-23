import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Bluetooth } from "./bluetooth.model";
import { config } from "./configuration.model";

@Injectable()
export class BluetoothService{
    deviceList: Array<Bluetooth>;
    test;

    constructor() {
        this.test = 0;        
    }

    register(config: config) {
        alert("Bluetooth run");
    }

/*
    scan() {
        var bluetooth = require("nativescript-bluetooth");
        var observable = require("tns-core-modules/data/observable");
        var observableArray = require("tns-core-modules/data/observable-array");

        return bluetooth.isBluetoothEnabled();
        this.http.post(
            Config.apiUrl + "user/" + Config.appKey,
            JSON.stringify({
                username: user.email,
                email: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        ).pipe(
            catchError(this.handleErrors)
        );
    }
*/

    async scan() {
        
        var bluetooth = require("nativescript-bluetooth");
        var observable = require("tns-core-modules/data/observable");
        var observableArray = require("tns-core-modules/data/observable-array");

        var opa = new observableArray.ObservableArray();
    
        var test = 1;

        var devices = await bluetooth.isBluetoothEnabled().then(
            function(enabled){
                //var opa = opa1;
                console.log("Enabled? " + enabled);
                return bluetooth.startScanning({
                    serviceUUIDs: [],
                    seconds: 4,
                    onDiscovered: function(periph){
                        opa.push(observable.fromObject(periph));
                        //console.log(observable.fromObject(periph));
                        //deviceList.push({UUID: String(periph.name)});
                    }
                }).then(function() {
                    var tmp = [];
                    opa.forEach((item) => {
                        tmp.push({name: item._map.UUID});
                        //console.log(item);
                    })
                    console.log("scanning complete");
                    return tmp;
                }, function(err) {
                    console.log("error while scanning: " + err);
                    return [];
                });

            }
        );   
        //console.log("-------------------");
        //console.log(devices.length);
        //console.log("-------------------");
        //console.log(devices);
        return devices;
    }

  
    
}