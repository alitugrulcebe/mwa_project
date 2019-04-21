import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  componyName: String;
  componyWebsite: String;
  componyLoc: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA'},
];

@Component({
  selector: 'app-compony-list',
  templateUrl: './compony-list.component.html',
  styleUrls: ['./compony-list.component.css']  
})

export class ComponyListComponent implements OnInit {
  displayedColumns: string[] = ['componyName', 'componyWebsite', 'componyLoc'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
