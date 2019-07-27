import { Injectable, resolveForwardRef, NgZone, ChangeDetectorRef} from "@angular/core";

import * as appSettings from "tns-core-modules/application-settings";
import { LocalNotifications } from "nativescript-local-notifications";

@Injectable()
export class NotificationService{
    
    constructor(private _ngZone: NgZone, private ref: ChangeDetectorRef) {
        //this.connected = new BehaviorSubject<boolean>(false);
        //this.serviceList = new observableArray.ObservableArray(); 
    }

    notify(severity) {
      console.log(severity);
        LocalNotifications.hasPermission().then((granted) => {
            console.log("permission granted? " + granted);
            if (!granted) {
                LocalNotifications.requestPermission().then((granted) => {
                    console.log("permission granted? " + granted);
                    if (granted) {
                      if (severity == 3){
                        var custom_title = "Safe UV absorption exceeded"
                        var custom_body = "You are risk of serious harm, it's recommended you take a break from the sun for the rest of the day."
                        var custom_image = "https://img.icons8.com/doodle/480/000000/fire-element.png"
                      } else if (severity == 2) {
                        var custom_title = "Safe UV absorption 75%"
                        var custom_body = "You are approaching the safe UV exposure threshold, consider seeking shade."
                        var custom_image = "https://img.icons8.com/plasticine/400/000000/umbrella.png"
                      } else if (severity == 1) {
                        var custom_title = "Safe UV absorption 50%"
                        var custom_body = "You have absorbed 50% of recommended UV for your skin type. Make sure you drink some water."
                        var custom_image = "https://img.icons8.com/officel/480/000000/temperature.png"
                      }

                        LocalNotifications.schedule([{
                          title: custom_title,
                          body: custom_body,
                          badge: 1,
                          image: custom_image, //https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg
                          thumbnail: true,
                          forceShowWhenInForeground: true
                          }]).then(
                              function() {
                                console.log("Notification scheduled");
                              },
                              function(error) {
                                console.log("scheduling error: " + error);
                              }
                          )
                    }
                });
            } else {
              if (severity == 3){
                var custom_title = "Safe UV absorption exceeded"
                var custom_body = "You are risk of serious harm, it's recommended you take a break from the sun for the rest of the day."
                var custom_image = "https://img.icons8.com/doodle/480/000000/fire-element.png"
              } else if (severity == 2) {
                var custom_title = "Safe UV absorption 75%"
                var custom_body = "You are approaching the safe UV exposure threshold, consider seeking shade."
                var custom_image = "https://img.icons8.com/plasticine/400/000000/umbrella.png"
              } else if (severity == 1) {
                var custom_title = "Safe UV absorption 50%"
                var custom_body = "You have absorbed 50% of recommended UV for your skin type. Make sure you drink some water."
                var custom_image = "https://img.icons8.com/officel/480/000000/temperature.png"
              }

              LocalNotifications.schedule([{
                  title: custom_title,
                  body: custom_body,
                  badge: 1,
                  image: custom_image, //https://cdn-images-1.medium.com/max/1200/1*c3cQvYJrVezv_Az0CoDcbA.jpeg
                  thumbnail: true,
                  forceShowWhenInForeground: true
                }]).then(
                    function() {
                      console.log("Notification scheduled");
                    },
                    function(error) {
                      console.log("scheduling error: " + error);
                    }
                )
            }
        });
    }
    
}