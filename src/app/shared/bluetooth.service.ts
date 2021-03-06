import { Injectable, resolveForwardRef, NgZone, ChangeDetectorRef} from "@angular/core";
import { BehaviorSubject } from "rxjs"; //Observable, 
import { Observable, PropertyChangeData } from "tns-core-modules/data/observable";
import { catchError, map, tap } from "rxjs/operators";
import { from } from 'rxjs';
import { Bluetooth } from "./bluetooth.model";
import { config } from "./configuration.model";
//import { deviceInfo } from "./connection.info";
import { NotificationService } from "../shared/notification.service";
import { LocalNotifications } from "nativescript-local-notifications";

import * as observableArray from "tns-core-modules/data/observable-array";
import * as bluetooth from "nativescript-bluetooth";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable()
export class BluetoothService{
    deviceList: Array<Bluetooth>;
    serviceList = [];

    

    notify = new Observable();

    uuid = '';
    discoveredServices = new observableArray.ObservableArray();
    raw_total;
    raw_percent;
    total;
    percent;
    vals;
    artificial;
    device: Bluetooth;
    severity;
    score;

    test_total = new Observable();

    private connected = new BehaviorSubject<boolean>(false);
    status = this.connected.asObservable();
    
    private behaviour_total = new BehaviorSubject(0);
    obs_total = this.behaviour_total.asObservable();
    
    private behaviour_percent = new BehaviorSubject(0);
    obs_percent = this.behaviour_percent.asObservable();
    
    private behaviour_device = new BehaviorSubject(this.device);
    obs_device = this.behaviour_device.asObservable();

    private behaviour_artificial = new BehaviorSubject(0);
    obs_artificial = this.behaviour_artificial.asObservable();

    private behaviour_raw_percent = new BehaviorSubject(0);
    obs_raw_percent = this.behaviour_raw_percent.asObservable();

    private behaviour_ttb = new BehaviorSubject('0');
    obs_ttb = this.behaviour_ttb.asObservable();

    constructor(private _ngZone: NgZone, private ref: ChangeDetectorRef, private notificationService: NotificationService) {
        //this.connected = new BehaviorSubject<boolean>(false);
        //this.serviceList = new observableArray.ObservableArray(); 
        this.vals = '';
        this.device = new Bluetooth();
        this.total = "0";
        this.percent = "0";
        this.raw_total = 0;
        this.raw_percent = 0;
        this.test_total.set("total", 0);
        this.artificial = 0;

        this.severity = 0;
        this.score = 0;

        this.test_total.on(Observable.propertyChangeEvent, function(propertychangeData: PropertyChangeData){
          this.total = propertychangeData.value;
          //this.ref.detectChanges();
          //console.log(propertychangeData.propertyName + " has been changed and the new value is: " + propertychangeData.value);
        }); 
        this.notify.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
          //console.log(propertyChangeData.propertyName + ' has been changed to: ' + propertyChangeData.value);
          //console.log(propertyChangeData.value);
          //this.notificationService.notify(1);
          if(propertyChangeData.value < 50) {
            console.log('here');
            this.severity = 0;
          } else if (50 <= propertyChangeData.value && propertyChangeData.value < 75) {// && this.severity == 0) {
            console.log('here');
            if (this.severity == 0) {
              this.notificationService.notify(1);
            }
            this.severity = 1;
          } else if (75 <= propertyChangeData.value && propertyChangeData.value < 100) {// && this.severity == 1) {
            if (this.severity <= 1){
              this.notificationService.notify(2);
            }
            this.severity = 2;
          } else if (propertyChangeData.value >= 100) {// && this.severity == 2) {
            if (this.severity <= 2) {
              this.notificationService.notify(3);
            }
            this.severity = 3;
          }
        });
    
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

    ngOnInit() {
      
  }

    

    register(config: config) {
        alert("Bluetooth run");
    }

    adjust(amount) {
      this.artificial = this.artificial + amount;
      this.behaviour_artificial.next(this.artificial);
    }

    changeScore(score){
      this.score = score;
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
            

            /*var handle;
            
            handle = setInterval(() => {
              this.raw_percent = this.raw_percent + .01;
              this.raw_total = this.raw_total + 1;     
              this.percent = Number.parseFloat(this.raw_percent + this.artificial).toFixed(2);
              this.total = Number.parseFloat(this.raw_total + this.artificial).toFixed(2);
              this.behaviour_percent.next(this.percent);
              this.behaviour_total.next(this.total);
              this.behaviour_raw_percent.next(this.raw_percent);
              this.notify.set("percent", this.percent);
                    //console.log(this.percent);
                    if(this.raw_percent == 100) {
                      clearInterval(handle);
                    }
                    this.ref.detectChanges();
                  }, 3000); // Run each 50ms
                  */


              bluetooth.startNotifying({
                peripheralUUID: this.device.uuid,
                serviceUUID: '6E400001-B5A3-F393-E0A9-E50E24DCCA9E',
                characteristicUUID: '6E400003-B5A3-F393-E0A9-E50E24DCCA9E',
                //onNotify: async function (result) {
                onNotify: async (result) => {
                  // see the read example for how to decode AsdfrrayBuffers
                    //console.log(String.fromCharCode.apply(null, new Uint8Array(result.value)));
                  //console.log(result.value);
                    var data = String.fromCharCode.apply(null, new Uint8Array(result.value));
                    //var data = new Uint8Array(result.value);
                    this.vals = this.vals.concat(data);
                    var dic = this.vals.split('\n');
                    for (var i = 0; i < dic.length-1; i++) {
                      if (dic[i].startsWith("q")) {
                        var tmp = dic[i].split(':');
                        this.raw_total = parseFloat(tmp[1]);
                        this.total = Number.parseFloat(this.raw_total + this.artificial).toFixed(2);
                        this.behaviour_total.next(this.total);

                        //this.test.next(tmp[1]);
                      } else if (dic[i].startsWith("p")) {
                        var tmp = dic[i].split(':');
                        this.raw_percent = parseFloat(tmp[1]);
                        this.percent = Number.parseFloat(this.raw_percent + this.artificial).toFixed(2);
                        this.behaviour_percent.next(this.percent);
                        this.behaviour_raw_percent.next(this.raw_percent);
                        this.notify.set("percent", this.percent);
                      } else if (dic[i].startsWith("t")) {
                        var tmp = dic[i].split(":");
                        //var ttb = parseFloat(tmp[1]);
                        var ttb = Number.parseFloat(tmp[1]).toFixed(2);
                        this.behaviour_ttb.next(ttb);
                      }
                    }

                    //console.log(data);
                    this.ref.detectChanges();
                    //console.log(dic[-])
                    this.vals = dic.pop();
                   
        
                }  
              }).then(function() {
                console.log("subscribed for notifications");
              }, function (err) {
                  console.log("subscribe error: " + err);
              });

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
    
}