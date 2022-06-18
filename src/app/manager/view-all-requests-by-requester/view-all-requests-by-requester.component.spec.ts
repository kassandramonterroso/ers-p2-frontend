import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRequestsByRequesterComponent } from './view-all-requests-by-requester.component';

describe('ViewAllRequestsByRequesterComponent', () => {
  let component: ViewAllRequestsByRequesterComponent;
  let fixture: ComponentFixture<ViewAllRequestsByRequesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllRequestsByRequesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllRequestsByRequesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
