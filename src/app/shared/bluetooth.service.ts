import { Injectable, resolveForwardRef, NgZone, ChangeDetectorRef} from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
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
    private connected = new BehaviorSubject<boolean>(false);
    status = this.connected.asObservable();
    uuid = '';
    discoveredServices = new observableArray.ObservableArray();
    device: Bluetooth;


    constructor(private _ngZone: NgZone, private ref: ChangeDetectorRef) {
        //this.connected = new BehaviorSubject<boolean>(false);
        //this.serviceList = new observableArray.ObservableArray(); 
        this.device = new Bluetooth();
        if (appSettings.hasKey("uuid")) {
            console.log(appSettings.getString("uuid"));
            console.log(appSettings.getString("name"));
            this.device.uuid = appSettings.getString("uuid");
            this.device.name = appSettings.getString("name");
            bluetooth.startScanning({
                serviceUUIDs: [],
                seconds: 1,
                onDiscovered: (peripheral) => {
                    if (peripheral.UUID == this.device.uuid) {
                        this.connect(this.device.uuid);
                    }
                },
                skipPermissionCheck: false,
            });
        }
        
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

    conStatus(): Observable<boolean> {
        return this.status;
    }

    onConnected(peripheral) {
        console.log("peripheral connected with uuid: " + peripheral.UUID);
        //var serviceList = [];
        this.discoveredServices = new observableArray.ObservableArray()
        peripheral.services.forEach((service) => {
            this.discoveredServices.push(service);
            //serviceList.push(service);
            this.device.services.push(service);
            //this.device.characteristics[service.UUID] = []
            service['characteristics'].forEach((char) => {
                this.device.characteristics.push(char);
                //this.device.services.push(char.UUID);
            });
            
        

        });    
        /*bluetooth.startNotifying({
            peripheralUUID: this.device.uuid,
            serviceUUID: 'F5DA',
            characteristicUUID: '8888',
            onNotify: function (result) {
                console.log(JSON.stringify(result));
            }
        }).then(function() {
            console.log("subscribed for notifs");
        });

        bluetooth.write({
            peripheralUUID: this.device.uuid,
            serviceUUID: 'F5DA',
            characteristicUUID: '8888',
            value: '0x01' // a hex 1
          }).then(function(result) {
            console.log("value written");
          }, function (err) {
            console.log("write error: " + err);
          });*/

        //console.log(this.discoveredServices);
        //this.serviceList = serviceList;
    }

    connect(uuid) {
        //var opa = new observableArray.ObservableArray();
        //var discoveredServices = new observableArray.ObservableArray();
        bluetooth.connect({
            UUID: uuid,
            onConnected: (peripheral) => {
                this.onConnected(peripheral);
                this.connected.next(true);
                this.device.uuid = peripheral.UUID;
                this.device.name = peripheral.name;
                appSettings.setString("uuid", this.device.uuid);
                appSettings.setString("name", this.device.name);
                this.ref.detectChanges();
                //console.log(this.discoveredServices);
            },
            onDisconnected: (peripheral) => {
                this.connected.next(false);
                console.log("peripheral disconnected with uuid: " + peripheral.UUID);
                this.ref.detectChanges();
                //this.connect(this.device.uuid);
            }
            //return this.serviceList;

        });
        
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