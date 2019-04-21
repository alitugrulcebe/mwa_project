import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface PeriodicElement {
  componyId: number;
  componyName: String;
  componyWebsite: String;
  componyLoc: String;
  componyRate: number;
}

export interface ComponySort {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {componyId: 1, componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA', componyRate: 5},
  {componyId: 2,componyName: 'Google', componyWebsite: 'www.google.com', componyLoc: 'LA', componyRate: 5},
  {componyId: 3,componyName: 'Amazon', componyWebsite: 'www.amazon.com', componyLoc: 'LA', componyRate: 5},
  {componyId: 4,componyName: 'MicroSoft', componyWebsite: 'www.microsoft.com', componyLoc: 'LA', componyRate: 5},
  {componyId: 5,componyName: 'Tencent', componyWebsite: 'www.tencent.com', componyLoc: 'LA', componyRate: 5},
  {componyId: 6,componyName: 'Huawei', componyWebsite: 'www.huawei.com', componyLoc: 'LA', componyRate: 5},
  {componyId: 7,componyName: 'Alibaba', componyWebsite: 'www.alibaba.com', componyLoc: 'LA', componyRate: 5},
  {componyId: 8,componyName: 'Linkedin', componyWebsite: 'www.linkedin.com', componyLoc: 'LA', componyRate: 5},
  {componyId: 9,componyName: 'Oracle', componyWebsite: 'www.oracle.com', componyLoc: 'LA', componyRate: 5},
  {componyId: 10,componyName: 'Intel', componyWebsite: 'www.intel.com', componyLoc: 'LA', componyRate: 5},
];

@Component({
  selector: 'app-compony-list',
  templateUrl: './compony-list.component.html',
  styleUrls: ['./compony-list.component.css']  
})

export class ComponyListComponent implements OnInit {
  displayedColumns: string[] = ['componyName', 'componyWebsite', 'componyLoc', 'componyRate'];
  dataSource = ELEMENT_DATA;

  componySorts: ComponySort[] = [
    {value: 'Compony-Rate', viewValue: 'Compony Rate'},
    {value: 'Compony-Location', viewValue: 'Compony Location'}
  ];

  click(vlaue0: String, value1: Object){
    alert(vlaue0);
    console.log(value1)
  }

  clickSort(ComponySort: String){
    console.log(ComponySort)
  }

  constructor() { }

  ngOnInit() {
  }

}
