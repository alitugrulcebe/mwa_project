import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CityService} from "../../services/city.service";
import {CompanyDetail} from "../company-detail/company-detail.component";

export interface LivingDetail {
  cityName: String;
  stateName: String;
  countryName: String;
  zipCode: number;
  restaurants: Item[];
  markets: Item[];
  rentPerMonth: Item[];
  buyApartmentPrice: Item[];
  salariesAndFinancing: Item[];
}

export interface Item {
  name: String,
  price: String
}

const DATA: LivingDetail = {
  cityName: 'IOWA CITY',
  stateName: 'IOWA',
  countryName: 'USA',
  zipCode: 53223,
  restaurants: [
    {name: 'Meal, Inexpensive Restaurant', price: '11.00 $'},
    {name: 'Meal for 2 People, Mid-range Restaurant, Three-course', price: '42.00 $'},
    {name: 'McMeal at McDonalds (or Equivalent Combo Meal)', price: '7.00 $'},
    {name: 'Domestic Beer (1 pint draught)', price: '3.99 $'},
    {name: 'Imported Beer (12 oz small bottle)', price: '4.50 $'}
  ],
  markets: [
    {name: 'Milk (regular), (1 gallon)', price: '2.56 $'},
    {name: 'Loaf of Fresh White Bread (1 lb)', price: '2.00 $'},
    {name: 'Rice (white), (1 lb)', price: '1.66 $'},
    {name: 'Eggs (regular) (12)', price: '1.32 $'},
    {name: 'Local Cheese (1 lb)', price: '4.43 $'}
  ],
  rentPerMonth: [
    {name: 'Apartment (1 bedroom) in City Centre', price: '872.48 $'},
    {name: 'Apartment (1 bedroom) Outside of Centre', price: '677.22 $'},
    {name: 'Apartment (3 bedrooms) in City Centre', price: '1,673.00 $'},
    {name: 'Apartment (3 bedrooms) Outside of Centre', price: '1,342.44 $'}
  ],
  buyApartmentPrice: [
    {name: 'Price per Square Feet to Buy Apartment in City Centre', price: '169.25 $'},
    {name: 'Price per Square Feet to Buy Apartment Outside of Centre', price: '145.50 $'}
  ],
  salariesAndFinancing: [
    {name: 'Average Monthly Net Salary (After Tax)', price: '2,316.95 $'},
    {name: 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate', price: '4.51'}
  ]
}
 
@Component({
  selector: 'app-living-detail',
  templateUrl: './living-detail.component.html',
  styleUrls: ['./living-detail.component.css']
})

export class LivingDetailComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price'];
  dataSource : LivingDetail = {} as LivingDetail;

  constructor(private route: ActivatedRoute,private cityService:CityService) { }

  ngOnInit() {
    this.getLivingDetail() 
  }

  getLivingDetail() {
    const cityName = this.route.snapshot.paramMap.get('id');
    this.cityService.getCityDetails(cityName).subscribe(res => {
      let x: LivingDetail = {
        cityName: res[0]['name'],
        stateName: res[0]['state'],
        countryName: res[0]['country'],
        zipCode: res[0]['zipCode'],
        restaurants: res[0]['restaurants'],
        markets: res[0]['markets'],
        rentPerMonth: res[0]['rentPerMonth'],
        buyApartmentPrice: res[0]['buyApartmentPrice'],
        salariesAndFinancing: res[0]['salaries']
      };
      this.dataSource = x;
    });
    console.log('CompanyId:' + cityName)
  }

}
