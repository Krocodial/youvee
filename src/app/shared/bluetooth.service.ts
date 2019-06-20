import { Injectable } from "@angular/core";

import { config } from "./configuration.model";

@Injectable()
export class BluetoothService{
    register(config: config) {
        alert("Bluetooth run");
    }
}