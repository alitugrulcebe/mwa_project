import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export interface CompanyDetail {
  companyId: number;
  companyName: String;
  companyWebsite: String;
  companyLoc: String;
  companyRate: number;
  companyZipCode: number;
  companyEmployeesNum: number;
  companyAvgSalary: String;
  companyRentHousePrice: String;
  companyDesc: String;
}

const COMPANY_DETAIL: CompanyDetail = {
  companyId: 1, 
  companyName: 'Facebook', 
  companyWebsite: 'www.facebook.com', 
  companyLoc: 'LA', 
  companyRate: 5,
  companyZipCode: 123456,
  companyEmployeesNum: 5000,
  companyAvgSalary: '100k/year',
  companyRentHousePrice: '1000$/month',
  companyDesc: 'Facebook is defined by our unique culture – one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating. The phrase “this journey is 1% finished,” reminds us that we’ve only begun to fulfill our mission to bring the world closer together.'
}

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})

export class CompanyDetailComponent implements OnInit {

  dataSource = COMPANY_DETAIL;

  selected = 0;
  hovered = 0;
  readonly = false;

  constructor(private route: ActivatedRoute, private location: Location) { 
  }
    
  ngOnInit() {
    this.getcompanyDetail()
  }

  getcompanyDetail(): void {
    const companyId = this.route.snapshot.paramMap.get('id');
    console.log('companyId:' + companyId)
  }

  goBack(): void {
    this.location.back();
  }

}
