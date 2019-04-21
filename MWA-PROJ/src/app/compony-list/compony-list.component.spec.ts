import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponyListComponent } from './compony-list.component';

describe('ComponyListComponent', () => {
  let component: ComponyListComponent;
  let fixture: ComponentFixture<ComponyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
