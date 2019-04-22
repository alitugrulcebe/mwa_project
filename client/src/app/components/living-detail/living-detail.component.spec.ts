import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingDetailComponent } from './living-detail.component';

describe('LivingDetailComponent', () => {
  let component: LivingDetailComponent;
  let fixture: ComponentFixture<LivingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
