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
    total;
    percent;


    constructor(private _ngZone: NgZone, private ref: ChangeDetectorRef) {
        //this.connected = new BehaviorSubject<boolean>(false);
        //this.serviceList = new observableArray.ObservableArray(); 
        this.device = new Bluetooth();
        this.total = 0;
        this.percent = 0;
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

    adjustPercent(percent) {
      this.percent = this.percent + percent;
    }

    adjustTotal(uv) {
      this.total = this.total + uv;
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

    disconnect() {
        bluetooth.disconnect({
            UUID: this.device.uuid
          }).then(function() {
            console.log("disconnected successfully");
          }, function (err) {
            // in this case you're probably best off treating this as a disconnected peripheral though
            console.log("disconnection error: " + err);
          });
    }

    onConnected(peripheral) {
        console.log("peripheral connected with uuid: " + peripheral.UUID);
        //var serviceList = [];
        //console.log(peripheral);
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
            

            /*bluetooth.read({
                peripheralUUID: this.device.uuid,
                serviceUUID: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                characteristicUUID: '6E400003-B5A3-F393-E0A9-E50E24DCCA9E'
              }).then(function(result) {
                // fi. a heartrate monitor value (Uint8) can be retrieved like this:
                console.log(result);
                var data = new Uint8Array(result.value);
                console.log(data);
                console.log("value is: " + data);  
              }, funcftion (err) {
                console.log("read error: " + err);
              });  sdf */


              /*bluetooth.startNotifying({
                peripheralUUID: this.device.uuid,
                serviceUUID: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                characteristicUUID: '6E400003-B5A3-F393-E0A9-E50E24DCCA9E',
                onNotify: function (result) {
                  // see the read example for how to decode AsdfrrayBuffers
                    //console.log(String.fromCharCode.apply(null, new Uint8Array(result.value)));
                  //console.log(result.value);
                    var data = String.fromCharCode.apply(null, new Uint8Array(result.value));
                    //var data = new Uint8Array(result.value);
                    console.log(data);
                    
                  //test 1
                  //const data = Uint8Array(result.value);
                  //console.log(data.toString());


                  //async test 2
                  function largeuint8ArrToString(unint8arr, callback) {
                    var bb = new Blob([unint8arr]);
                    var f = new FileReader();
                    f.onload = function(e) {
                      callback(f.result);
                    };
                    f.readAsText(bb);
                  }

                  var test = new Uint8Array(result.value);
                  largeuint8ArrToString(test, function(text){
                    console.log(text);
                  });
                  
                  
                  
                }  
              }).then(function() {
                console.log("subscribed for notifications");
              }, function (err) {
                  console.log("subscribe error: " + err);
              });*/

              /*bluetooth.write({
                peripheralUUID: this.device.uuid,
                serviceUUID: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                characteristicUUID: '6E400002-B5A3-F393-E0A9-E50E24DCCA9E',
                value: '0x11' // a hex 1
              }).then(function(result) {
                console.log("value written");
              }, function (err) {
                console.log("write error: " + err);
              });*/

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