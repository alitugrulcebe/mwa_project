import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponyDetailComponent } from './compony-detail.component';

describe('ComponyDetailComponent', () => {
  let component: ComponyDetailComponent;
  let fixture: ComponentFixture<ComponyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
