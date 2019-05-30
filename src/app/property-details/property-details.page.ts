import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 
import { Property } from '../models/property.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  public nameOfProperty: string;
  public propertyId:number;
  public currentProperty: Property;

properties: Array<Property> = [];

  constructor(
    private activatedRoute: ActivatedRoute)
  
  {

    let property1 = new Property();
    property1.name = "one";
    property1.id = 0;

    let property2= new Property();
    property2.name= "Two"
    property2.id= 3;

    this.properties.push(property1);
    this.properties.push(property2);
  }
  
  
  ngOnInit() {
    
    // let receivedQueryParams = function(data: any) {
    //   console.log(data);
    //   console.log(data.params.propertyName);

    //   /*willnotwork*/ this.nameOfProperty = data.params.propertyName;

    // }

    let arrow = (data: any) => {
      this.nameOfProperty = data.params.propertyName;
      this.propertyId = data.params.propertyId;

    //Fint the right property by ID
    this.properties.forEach(
      (property: Property) => {
          if (property.id == this.propertyId) {
            // Display this property
            this.currentProperty = property;
          }

    })
    };
    this.activatedRoute.queryParamMap.subscribe(
      //receivedQueryParams,
      arrow)
  }


}
  

    
      //(data: any) => console.log(data.params.propertyName)

    

    // var queryParams = {
    //   q: "ionic"
    // };
    // receivedQueryParams(queryParams);

    


