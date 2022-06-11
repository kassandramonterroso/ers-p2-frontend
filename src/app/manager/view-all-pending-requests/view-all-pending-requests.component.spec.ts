import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllPendingRequestsComponent } from './view-all-pending-requests.component';

describe('ViewAllPendingRequestsComponent', () => {
  let component: ViewAllPendingRequestsComponent;
  let fixture: ComponentFixture<ViewAllPendingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllPendingRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllPendingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
