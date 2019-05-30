import { Component } from '@angular/core';
import {Property} from '../models'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  properties: Array<Property> = [];

  constructor(
    private navCtrl: NavController
  ) {

    let property1 = new Property();
    property1.name = "one"
    property1.id=0

    let property2= new Property();
    property2.name= "Two"
    property2.id- 3

    this.properties.push(property1);
    this.properties.push(property2);

  }

  navToProperty(property: any) {
    //another way to do this
   // let navOPtions: NavigationOptions = {
    //  queryParams: {
     //   q: "ionic",
     //   propertyName: property.name
      
    //};
   // this.navCtrl.navigateForward("abc", navOptions);

    this.navCtrl
      .navigateForward("property-details", {
        queryParams: {
          q: "ionic",
          propertyName: property.name,
          propertyId: property.id
        }
      });
  
  }
    

}
