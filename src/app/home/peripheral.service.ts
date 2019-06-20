import { Injectable } from "@angular/core";

import { Peripheral } from "./peripheral";

@Injectable({
    providedIn: "root"
})
export class PeripheralService {
    peripherals = [];
    //private peripherals = new Array<Peripheral>();

    addToPeripherals(perph) {
        this.peripherals.push(perph);
    }

getPeripherals() {
    return this.peripherals;
}

getPeripheral(id: number) {
    return this.peripherals.filter((peripheral) => peripheral.id === id)[0];
}

}
