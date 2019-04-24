import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class HomeComponent implements OnInit{

  current = 0;
  img_list = [
    'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
    'http://www.zeepod.io/wp-content/uploads/2018/02/LA.jpeg',
    'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/north-america/seattle-travel.adapt.1900.1.jpg',
    'https://mansion-global-app.s3.amazonaws.com/stories/new-luxury-developments-spring-2018-miami/media/miamishorthand_lead-mr.jpg',
    'https://www.billboard.com/files/media/chicago-bb6-backstage-pass-2019-billboard-1548.jpg'

  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 5000);
  }

}
