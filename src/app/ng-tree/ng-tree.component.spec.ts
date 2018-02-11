import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTreeComponent } from './ng-tree.component';

describe('NgTreeComponent', () => {
  let component: NgTreeComponent;
  let fixture: ComponentFixture<NgTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
