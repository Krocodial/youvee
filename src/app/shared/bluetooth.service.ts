import { Injectable, resolveForwardRef, NgZone } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { from } from 'rxjs';
import { Bluetooth } from "./bluetooth.model";
import { config } from "./configuration.model";
//import { deviceInfo } from "./connection.info";

import * as observableArray from "tns-core-modules/data/observable-array";
import * as bluetooth from "nativescript-bluetooth";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable()
export class BluetoothService{
    deviceList: Array<Bluetooth>;
    serviceList = [];
    connected: boolean;
    uuid = '';
    discoveredServices = new observableArray.ObservableArray();

    constructor(private _ngZone: NgZone) {
        this.connected = false;
        //this.serviceList = new observableArray.ObservableArray(); 
    }

    register(config: config) {
        alert("Bluetooth run");
    }

    

    scan() {

        var opa = new observableArray.ObservableArray();

        return from(bluetooth.startScanning({
            serviceUUIDs: [],
            seconds: 1,
            onDiscovered: (peripheral) => {
                if (peripheral.name) {
                    opa.push({'uuid': peripheral.UUID, 'name': peripheral.name});
                }
                
            },
            skipPermissionCheck: false,
          }).then(() => {  
            console.log("finished scanning");
            return opa;
            
          }, (err) => {
            console.log("error while scanning: " + err);
            return opa;
          })
        );
        
    }

    onConnected(peripheral) {
        console.log("peripheral connected with uuid: " + peripheral.UUID);
        this.connected = true;
        //var serviceList = [];
        peripheral.services.forEach((service) => {
            this.discoveredServices.push(service);
            //serviceList.push(service);
        });    
        //this.serviceList = serviceList;
    }

    connect(uuid) {
        //var opa = new observableArray.ObservableArray();
        //var discoveredServices = new observableArray.ObservableArray();
        return from(bluetooth.connect({
            UUID: uuid,
            onConnected: (peripheral) => {
                this.onConnected(peripheral)
            },
            onDisconnected: (peripheral) => {
                this.connected = false;
                console.log("peripheral disconnected with uuid: " + peripheral.UUID);
            }
            //return this.serviceList;

        })
    );
        
    }


 /*   async connect(uuid) {
        var bluetooth = require("nativescript-bluetooth");
        var observable = require("tns-core-modules/data/observable");
        var observableArray = require("tns-core-modules/data/observable-array");
        
        var opa = new observableArray.ObservableArray();

        var services = await bluetooth.connect({
            UUID: uuid,
            onConnected: function(peripheral) {
                console.log("Peripheral connected with UUID: " + peripheral.UUID);
                var serviceList = [];
                return peripheral.services;
                console.log(peripheral.services);
                peripheral.services.forEach(function(service) {
                    opa.push(observable.fromObject(service));
                    //serviceList.push({service: JSON.stringify(service)});
                    //console.log("service found: " + JSON.stringify(service));   
                    //console.log(service);
                    return opa;
                });
                opa.push(observable.fromObject(peripheral));
                //console.log(opa);
                return opa;
                //console.log(opa);
            },
            onDisconnected: function(peripheral) {
                console.log("Peripheral disconnected with UUID: " + peripheral.UUID);
                return peripheral.services;
            }
        });
        //console.log(await serviceList);
        return services;
        
    }*/
    
}