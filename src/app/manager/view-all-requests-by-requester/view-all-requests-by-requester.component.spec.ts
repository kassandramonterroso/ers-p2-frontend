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
  
  it(`should call ngOnInit`, function(){
    const vARBR = fixture.componentInstance;
    expect(vARBR.ngOnInit).toHaveBeenCalled();
  });

  it(`should render title`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('View All Requests By Employee');
  });
  
});
