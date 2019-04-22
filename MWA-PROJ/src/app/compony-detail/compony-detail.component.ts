import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

export interface ComponyDetail {
  componyId: number;
  componyName: String;
  componyWebsite: String;
  componyLoc: String;
  componyRate: number;
  componyZipCode: number;
  componyEmployeesNum: number;
  componyAvgSalary: String;
  componyRentHousePrice: String;
  componyDesc: String;
}

const COMPONY_DETAIL: ComponyDetail = {
  componyId: 1, 
  componyName: 'Facebook', 
  componyWebsite: 'www.facebook.com', 
  componyLoc: 'LA', 
  componyRate: 5,
  componyZipCode: 123456,
  componyEmployeesNum: 5000,
  componyAvgSalary: '100k/year',
  componyRentHousePrice: '1000$/month',
  componyDesc: 'Facebook is defined by our unique culture – one that rewards impact. We encourage people to be bold and solve the problems they care most about. We work in small teams and move fast to develop new products, constantly iterating. The phrase “this journey is 1% finished,” reminds us that we’ve only begun to fulfill our mission to bring the world closer together.'
}

@Component({
  selector: 'app-compony-detail',
  templateUrl: './compony-detail.component.html',
  styleUrls: ['./compony-detail.component.css']
})

export class ComponyDetailComponent implements OnInit {

  dataSource = COMPONY_DETAIL;

  selected = 0;
  hovered = 0;
  readonly = false;

  constructor(private route: ActivatedRoute, private location: Location) { 
  }
    
  ngOnInit() {
    this.getComponyDetail()
  }

  getComponyDetail(): void {
    const componyId = this.route.snapshot.paramMap.get('id');
    console.log('ComponyId:' + componyId)
  }

  goBack(): void {
    this.location.back();
  }

}
