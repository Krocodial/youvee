import { Component, OnInit } from "@angular/core";
import { Page, backgroundRepeatProperty, View } from "tns-core-modules/ui/page";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "about", loadChildren: "./about/about.module#AboutModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "About",
    moduleId: module.id,
    templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {
    name: string;
    email: string;
    password: string;
    news;


    constructor(private page: Page) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
       this.news = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ligula ac ipsum tempor tempor nec ut justo. Vivamus iaculis lorem tempor, scelerisque nisl at, euismod arcu. Sed purus turpis, pulvinar non pretium eu, cursus et neque. Phasellus dui dui, lacinia rutrum laoreet sed, bibendum id leo. Suspendisse quis viverra neque. Integer semper magna at ultrices posuere. Ut mattis id lorem eget vehicula. Pellentesque vitae aliquam urna. Sed placerat maximus nulla. Vestibulum a commodo nisl. Praesent in eros enim. Curabitur eu est malesuada, congue risus sit amet, dictum eros. Aliquam ac euismod nulla. In finibus nibh a enim pharetra, at sollicitudin ipsum condimentum.",
                     "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vitae nisi lorem. Morbi commodo sem erat, id pretium lorem pharetra ut. Aenean blandit nisl sit amet sollicitudin mollis. In sit amet mauris vulputate, bibendum purus id, varius ligula. Aliquam tincidunt felis urna, finibus elementum nisl semper vitae. Suspendisse a dui id nunc aliquam dapibus sit amet vel augue. Cras non tellus blandit, dapibus odio ultricies, tincidunt sapien. Nunc nec augue eleifend, luctus libero id, imperdiet metus. Nam rhoncus ac augue sed euismod. Nulla rhoncus vehicula dui, at lobortis massa rutrum porta. Nam iaculis nisl malesuada, rhoncus ipsum eget, aliquet lacus. Nulla est ipsum, mattis ac nisi in, interdum ornare lorem. Nunc dapibus ornare maximus. Quisque sed lacinia eros.",
                     "Fusce pharetra fringilla lorem, eget auctor quam faucibus ut. Praesent vitae risus eu justo malesuada pretium in a lorem. Duis hendrerit hendrerit lacus eget blandit. In pretium eleifend dolor, eu imperdiet nulla convallis sit amet. Curabitur at magna metus. Suspendisse et turpis lacinia, feugiat libero eu, gravida mi. Praesent sit amet tristique mi, ac scelerisque eros."]
        
    }

    ngOnInit(): void {
        //this.page.actionBarHidden = true;
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSignupWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    onSignupButtonTap(): void {
        const name = this.name;
        const email = this.email;
        const password = this.password;

        /* ***********************************************************
        * Call your custom signup logic using the email and password data.
        *************************************************************/
    }
}
