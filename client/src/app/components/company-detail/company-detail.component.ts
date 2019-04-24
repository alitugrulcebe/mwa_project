import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CompanyService} from "../../services";
import {CompanyElement} from "../company-list/company-list.component";

export interface CompanyDetail {
  id: number;
  name: String;
  website: String;
  location: String;
  rating: number;
  zipCode: number;
  employeesNumber: number;
  companyAvgSalary: number;
  companyDesc: string;
  // companyZipCode: number;
  // companyEmployeesNum: number;
  // companyAvgSalary: String;
  // companyRentHousePrice: String;
  // companyDesc: String;
}

//var COMPANY_DETAIL: CompanyDetail = {};
//var COMPANY_DETAIL: CompanyDetail = {};
//   companyId: 1,
//   companyName: 'Facebook',
//   companyWebsite: 'www.facebook.com',
//   companyLoc: 'LA',
//   companyRate: 5,
//   companyZipCode: 123456,
//   companyEmployeesNum: 5000,
//   companyAvgSalary: '100k/year',
//   companyRentHousePrice: '1000$/month',
//   companyDesc: 'Facebook is defined by our unique culture – one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating. The phrase “this journey is 1% finished,” reminds us that we’ve only begun to fulfill our mission to bring the world closer together.'
// }

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})

export class CompanyDetailComponent implements OnInit {

  dataSource: CompanyDetail = {} as CompanyDetail;

  selected = 0;
  hovered = 0;
  readonly = false;

  constructor(private route: ActivatedRoute, private location: Location, private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getcompanyDetail()
  }

  getcompanyDetail(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompaniesById(companyId).subscribe(res => {
      let x: CompanyDetail = {
        id: res['_id'],
        name: res['name'],
        website: res['website'],
        location: res['location'],
        rating: res['rating'],
        companyAvgSalary: res['companyAvgSalary'],
        employeesNumber: res['employeesNumber'],
        zipCode: res['zipCode'],
        companyDesc: res['companyDesc']
      };
      this.dataSource = x;
    });
    console.log('companyId:' + companyId)
  }

  goBack(): void {
    this.location.back();
  }

}
