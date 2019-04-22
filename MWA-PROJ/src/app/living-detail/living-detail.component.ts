import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface LivingDetail {
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
 
@Component({
  selector: 'app-living-detail',
  templateUrl: './living-detail.component.html',
  styleUrls: ['./living-detail.component.css']
})

export class LivingDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getLivingDetail() 
  }

  getLivingDetail() {
    const componyId = this.route.snapshot.paramMap.get('id');
    console.log('ComponyId:' + componyId)
  }

}
