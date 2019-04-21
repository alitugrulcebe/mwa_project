import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-compony-detail',
  templateUrl: './compony-detail.component.html',
  styleUrls: ['./compony-detail.component.css']
})
export class ComponyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { 
  }

  ngOnInit() {
    this.getComponyDetail()
  }

  getComponyDetail(): void {
    const componyId = +this.route.snapshot.paramMap.get('id');
    console.log('ComponyId:' + componyId)
  }

  goBack(): void {
    this.location.back();
  }

}
