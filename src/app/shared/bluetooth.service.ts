import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { from } from 'rxjs';
import { Bluetooth } from "./bluetooth.model";
import { config } from "./configuration.model";

import * as observableArray from "tns-core-modules/data/observable-array";
import * as bluetooth from "nativescript-bluetooth";


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

    scan() {

        var opa = new observableArray.ObservableArray();

        return from(bluetooth.startScanning({
            serviceUUIDs: [],
            seconds: 2,
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

    async connect(uuid) {
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
        
    }

    /*
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
                        //if (periph.hasOwnProperty('name')) {
                        //    console.log('slkdjfsdjf    sl;kdjfsoidjfl');
                        //}
                        if (periph.name) {
                            console.log(periph.name)
                            opa.push(observable.fromObject(periph));
                        }
                        //console.log(observable.fromObject(periph));
                        //deviceList.push({UUID: String(periph.name)});
                    }
                }).then(function() {
                    var tmp = [];
                    opa.forEach((item) => {
                        tmp.push({name: item._map.UUID, id: item._map.name});
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
    */

  
    
}