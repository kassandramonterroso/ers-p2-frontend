import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllResolvedRequestsComponent } from './view-all-resolved-requests.component';

describe('ViewAllResolvedRequestsComponent', () => {
  let component: ViewAllResolvedRequestsComponent;
  let fixture: ComponentFixture<ViewAllResolvedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllResolvedRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllResolvedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should call ngOnInit before loadData`, function(){
    const vARR = fixture.componentInstance;
    expect(vARR.ngOnInit).toHaveBeenCalledBefore(vARR.loadData);
  });

  it(`should render title`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('View All Resolved Requests');
  });
  
});
