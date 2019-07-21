import { Component, OnInit } from "@angular/core";
import { BluetoothService } from "../shared/bluetooth.service";
import * as observableArray from "tns-core-modules/data/observable-array";
import { Bluetooth } from "../shared/bluetooth.model";
import { DeviceInfo } from "../shared/connection.info";

@Component({
    selector: "Device",
    moduleId: module.id,
    templateUrl: "./device.component.html"
})
export class DeviceComponent implements OnInit {
    deviceList: Array<Bluetooth>;
    deviceInfo: DeviceInfo;
    public busy = false;
    test = [];
    connected: boolean;
    serviceList = [];
    discoveredServices = new observableArray.ObservableArray();
    news;
    intensity;

    constructor(private bluetoothService: BluetoothService) {
        this.connected = false;
        this.deviceList = [];
        this.busy = false;
        this.intensity = 15.0;
        this.serviceList = [];
        this.deviceInfo = new DeviceInfo();
    }

    ngOnInit() {
        this.bluetoothService.status.subscribe(value => { this.connected = value});
    }
}
