import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../services";
import {DataSource} from "@angular/cdk/table";
import {Observable} from "rxjs";
import {Company} from "../../models";

export interface CompanyElement {
  _id: number;
  name: String;
  website: String;
  location: String;
  rating: number;
}

export interface companySort {
  value: string;
  viewValue: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {companyId: 1,companyName: 'Facebook', companyWebsite: 'www.facebook.com', companyLoc: 'LA', companyRate: 5},
//   {companyId: 2,companyName: 'Google', companyWebsite: 'www.google.com', companyLoc: 'LA', companyRate: 5},
//   {companyId: 3,companyName: 'Amazon', companyWebsite: 'www.amazon.com', companyLoc: 'LA', companyRate: 5},
//   {companyId: 4,companyName: 'MicroSoft', companyWebsite: 'www.microsoft.com', companyLoc: 'LA', companyRate: 5},
//   {companyId: 5,companyName: 'Tencent', companyWebsite: 'www.tencent.com', companyLoc: 'LA', companyRate: 5},
//   {companyId: 6,companyName: 'Huawei', companyWebsite: 'www.huawei.com', companyLoc: 'LA', companyRate: 5},
//   {companyId: 7,companyName: 'Alibaba', companyWebsite: 'www.alibaba.com', companyLoc: 'LA', companyRate: 5},
//   {companyId: 8,companyName: 'Linkedin', companyWebsite: 'www.linkedin.com', companyLoc: 'LA', companyRate: 5},
//   {companyId: 9,companyName: 'Oracle', companyWebsite: 'www.oracle.com', companyLoc: 'LA', companyRate: 5},
//   {companyId: 10,companyName: 'Intel', companyWebsite: 'www.intel.com', companyLoc: 'LA', companyRate: 5},
// ];

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = ['companyName', 'companyWebsite', 'companyLoc', 'companyRate'];
  private dataSource:any[];

  companySorts: companySort[] = [
    {value: 'company-Rate', viewValue: 'company Rate'},
    {value: 'company-Location', viewValue: 'company Location'}
  ]

  clickSort(companySort: String){
    console.log(companySort)
  }

  constructor(private companyService:CompanyService) {

  }

  ngOnInit() {
    this.companyService.getCompaniesByLocation().subscribe(res => {
      debugger;
      console.log(res);
      var dataArray = new Array;
      for(var o in res) {
        dataArray.push(res[o]);
      }
      this.dataSource = dataArray;
    });
  }

}
