import { Component, OnInit, ChangeDetectorRef, TemplateRef, ViewChild, ElementRef, AfterViewInit, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadialScale, RadialBarIndicator, RadRadialGauge } from "nativescript-ui-gauge";
import { config } from "../shared/configuration.model";
import { BluetoothService } from "../shared/bluetooth.service";
import { Bluetooth } from "../shared/bluetooth.model";
import { Page, backgroundRepeatProperty, View } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";
import { Image } from "tns-core-modules/ui/image";
import { PeripheralService } from "./peripheral.service";
//import bluetooth = require('nativescript-bluetooth');
import * as bluetooth from "nativescript-bluetooth";
//import { Observable } from "rxjs";
import { DeviceInfo } from "../shared/connection.info";
import { from } from 'rxjs';
import { throwIfEmpty } from "rxjs/operators";

import * as dialogs from "tns-core-modules/ui/dialogs";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData, Observable, PropertyChangeData } from "tns-core-modules/data/observable";

import { ChangeDetectionStrategy } from "@angular/compiler/src/core";
//import { View } from "tns-core-modules/ui/core/view";
import * as observableArray from "tns-core-modules/data/observable-array";
import { RadialNeedle } from "nativescript-ui-gauge";

import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";
import {Folder, path, knownFolders} from "tns-core-modules/file-system";
import { NotificationService } from "../shared/notification.service";


@Component({
    selector: "Home",
    moduleId: module.id,
    //providers: [BluetoothService],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    //config: config;
    //deviceList;
    //serviceList;
    //groceryList: Array<Object> = [];
    //opa: Array<Object> = [];
    deviceList: Array<Bluetooth>;
    //device: Bluetooth;
    //test;
    deviceInfo: DeviceInfo;
    public busy = false;
    test = [];
    public connected: boolean;
    serviceList = [];
    discoveredServices = new observableArray.ObservableArray();
    news;
    intensity;
    percent;

    constructor(private bluetoothService: BluetoothService, private router: Router, private page: Page, private ngZone:NgZone, private notificationService: NotificationService, private routerExtensions: RouterExtensions) {
        //this.connected = bluetoothService.connected;
        //deviceInfo.connected = false;
        //this.config = new config();
        this.connected = false;
        this.deviceList = [];
        this.busy = false;
        this.percent = 0;
        //this.serviceList = this.bluetoothService.getServices();
        //this.device = new Bluetooth();
        //this.test = 0;
        this.intensity = 15.0;
        this.news = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ligula ac ipsum tempor tempor nec ut justo. Vivamus iaculis lorem tempor, scelerisque nisl at, euismod arcu. Sed purus turpis, pulvinar non pretium eu, cursus et neque. Phasellus dui dui, lacinia rutrum laoreet sed, bibendum id leo. Suspendisse quis viverra neque. Integer semper magna at ultrices posuere. Ut mattis id lorem eget vehicula. Pellentesque vitae aliquam urna. Sed placerat maximus nulla. Vestibulum a commodo nisl. Praesent in eros enim. Curabitur eu est malesuada, congue risus sit amet, dictum eros. Aliquam ac euismod nulla. In finibus nibh a enim pharetra, at sollicitudin ipsum condimentum.",
                     "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vitae nisi lorem. Morbi commodo sem erat, id pretium lorem pharetra ut. Aenean blandit nisl sit amet sollicitudin mollis. In sit amet mauris vulputate, bibendum purus id, varius ligula. Aliquam tincidunt felis urna, finibus elementum nisl semper vitae. Suspendisse a dui id nunc aliquam dapibus sit amet vel augue. Cras non tellus blandit, dapibus odio ultricies, tincidunt sapien. Nunc nec augue eleifend, luctus libero id, imperdiet metus. Nam rhoncus ac augue sed euismod. Nulla rhoncus vehicula dui, at lobortis massa rutrum porta. Nam iaculis nisl malesuada, rhoncus ipsum eget, aliquet lacus. Nulla est ipsum, mattis ac nisi in, interdum ornare lorem. Nunc dapibus ornare maximus. Quisque sed lacinia eros.",
                     "Fusce pharetra fringilla lorem, eget auctor quam faucibus ut. Praesent vitae risus eu justo malesuada pretium in a lorem. Duis hendrerit hendrerit lacus eget blandit. In pretium eleifend dolor, eu imperdiet nulla convallis sit amet. Curabitur at magna metus. Suspendisse et turpis lacinia, feugiat libero eu, gravida mi. Praesent sit amet tristique mi, ac scelerisque eros."]
        //this.connected = false;
        this.serviceList = [];
        this.deviceInfo = new DeviceInfo();

        this.bluetoothService.test_total.on(Observable.propertyChangeEvent, function(propertychangeData: PropertyChangeData){
            this.percent = propertychangeData.value;
            //this.ref.detectChanges();
            //console.log(propertychangeData.propertyName + " has been changed and the new value is: " + propertychangeData.value);
          });


    }

    ngOnInit() {
        this.bluetoothService.status.subscribe(value => { this.connected = value});
        this.bluetoothService.percy.subscribe(value => { this.percent = value });


        //let scale = this.scaleElement.nativeElement as RadialScale;
        //let barIndicator = scale.indicators.getItem(1) as RadialBarIndicator;
        //barIndicator.maximum = this.bluetoothService.percent;

        //this.deviceList = this.bluetoothService.scan();
        //this.devices = this.bluetoothService.scan();
        
        //this.page.actionBarHidden = true;
        
        //this.perphs = this.peripheralService.getPeripherals();
        // Init your component properties here.
    }

    @ViewChild("myScale", { static: false }) scaleElement: ElementRef;
    
    /*ngAfterViewInit() {
        
        let scale = this.scaleElement.nativeElement as RadialScale;
        let barIndicator = scale.indicators.getItem(1) as RadialBarIndicator;
        barIndicator.maximum = this.bluetoothService.percent;
        for (let i = 0; i < scale.indicators.length; i++) {
            let barIndicator = scale.indicators.getItem(i) as RadialBarIndicator;
            if (barIndicator.maximum === 0) {
                barIndicator.maximum = i * 15;
            }
        }
}*/


    check() {
        //console.log(this.deviceList.length);
        //this.deviceList.forEach((item) => {
        //    console.log(item);
        //});
        //console.log(this.serviceList.length);
        //this.busy = true;
        //this.test++;
        
    }

    connec() {
        this.connected = !this.connected;
        console.log(this.connected);
    }

   
    connect(uuid) {
        //var opa = new observableArray.ObservableArray();

        bluetooth.connect({
            UUID: uuid,
            onConnected: (peripheral) => {
                console.log("peripheral connected with uuid: " + peripheral.UUID);
                this.connected = true;
                var serviceList = [];
                peripheral.services.forEach((service) => {
                    serviceList.push(service);
                });    
                this.serviceList = serviceList;
            },
            onDisconnected: (peripheral) => {
                this.connected = false;
                console.log("peripheral disconnected with uuid: " + peripheral.UUID);
                
            }
            //return this.serviceList;

        });

    }
     scan() {
        
         this.bluetoothService.scan()
            .subscribe(
                (opa) => {
                    this.busy = true;
                    //console.log(opa["_array"]);
                    this.deviceList = opa["_array"];
                    //alert("complete");
                    var options = [];
                    var mapping = {};
            this.deviceList.forEach((device) => {
                options.push(device.name);
                mapping[device.name] = device.uuid;
            });

            this.busy = false;
            dialogs.action({
                message: "Please select your bluetooth device",
                cancelButtonText: "Cancel",
                actions: options,
            }).then( result => {  
                 this.ngZone.run(() => {
                    this.bluetoothService.connect(mapping[result]);
                });
            },
                () => {
                    alert("error");
                    this.busy = false;
                }
            );
            
        });
    }
}
