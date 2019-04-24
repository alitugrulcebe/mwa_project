import {Component, OnInit, ViewChild} from '@angular/core';
import {CompanyService} from "../../services";
import {MatSort, MatTable, MatTableDataSource} from "@angular/material";


export interface CompanyElement {
  _id: number;
  name: String;
  website: String;
  location: String;
  rating: number;
}

let ELEMENT_DATA: CompanyElement[] = [];

export interface companySort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'website', 'location', 'rating'];
  dataSource = new MatTableDataSource();
  Arr = Array;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') table: MatTable<CompanyElement>;

  constructor(private companyService:CompanyService) {
    console.log(ELEMENT_DATA);
  }

  ngOnInit() {
    this.companyService.getCompaniesByLocation().subscribe(res => {
      ELEMENT_DATA = [];
      for(var o in Object.keys(res)) {
        let x :CompanyElement = {
          _id: res[o]['_id'],
          name: res[o]['name'],
          website: res[o]['website'],
          location: res[o]['location'],
          rating:res[o]['rating']};
        ELEMENT_DATA.push(x);
      }
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.table.renderRows();
    });
  }

  getRecord(objname: any) {
    console.log(objname)
  }
}
