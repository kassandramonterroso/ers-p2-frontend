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
  
  it(`should call loadData`, function(){
    const vAPR = fixture.componentInstance;
    expect(vAPR.loadData).toHaveBeenCalled();
  });

  it(`should render title`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('View All Pending Requests');
  });
  
});
