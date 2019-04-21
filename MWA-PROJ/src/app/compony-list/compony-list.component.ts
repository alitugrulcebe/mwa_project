import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';

export interface PeriodicElement {
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
  {componyName: 'Facebook', componyWebsite: 'www.facebook.com', componyLoc: 'LA', componyRate: 5},
  {componyName: 'Google', componyWebsite: 'www.google.com', componyLoc: 'LA', componyRate: 5},
  {componyName: 'Amazon', componyWebsite: 'www.amazon.com', componyLoc: 'LA', componyRate: 5},
  {componyName: 'MicroSoft', componyWebsite: 'www.microsoft.com', componyLoc: 'LA', componyRate: 5},
  {componyName: 'Tencent', componyWebsite: 'www.tencent.com', componyLoc: 'LA', componyRate: 5},
  {componyName: 'Huawei', componyWebsite: 'www.huawei.com', componyLoc: 'LA', componyRate: 5},
  {componyName: 'Alibaba', componyWebsite: 'www.alibaba.com', componyLoc: 'LA', componyRate: 5},
  {componyName: 'Linkedin', componyWebsite: 'www.linkedin.com', componyLoc: 'LA', componyRate: 5},
  {componyName: 'Oracle', componyWebsite: 'www.oracle.com', componyLoc: 'LA', componyRate: 5},
  {componyName: 'Intel', componyWebsite: 'www.intel.com', componyLoc: 'LA', componyRate: 5},
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

  click(vlaue){
    alert(vlaue);
  }

  constructor() { }

  ngOnInit() {
  }

}
