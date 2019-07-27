//import { BluetoothService } from "./shared/bluetooth.service";

export class CustomAppDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];
    public static ObjCExposedMethods = {
        "runOnBackground": { returns: interop.types.void }
    };
    
    private bluetoothService: BluetoothService;
    private bgTask;
    private timer;
    private timerCounter;
    
    public applicationDidEnterBackground(application: UIApplication) {
        console.log("Enter background");
        //var bluetooth = require('~/app/shared/bluetooth.service');
        //console.log(bluetooth.device.uuid);
        //bluetooth.adjust(25);
        this.bgTask = application.beginBackgroundTaskWithNameExpirationHandler("MyTask", () => {
            this.endBackgroundTask();
        });

        this.timerCounter = 5;
        console.log("Start logging numbers on background.");
        this.timer = NSTimer.scheduledTimerWithTimeIntervalTargetSelectorUserInfoRepeats(2, this, "runOnBackground", null, true);
    }

    public applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        //var bluetooth = require('./shared/bluetooth.service');
        //bluetooth.adjust(25);
        return true;
    }

    private endBackgroundTask(): void {
        if (this.timer) {
            this.timer.invalidate();
            this.timer = null;
        }
        this.timerCounter = 5;
        UIApplication.sharedApplication.endBackgroundTask(this.bgTask);
        this.bgTask = UIBackgroundTaskInvalid;
        console.log("End of background task.");
    }

    public runOnBackground(): void {
        if (this.timerCounter <= 0) {
            this.endBackgroundTask();
            return;
        }
        console.log(`${this.timerCounter} (the app is on background)`);
        this.timerCounter--;
    }
}