import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyPendingComponent } from './view-my-pending.component';

describe('ViewMyPendingComponent', () => {
  let component: ViewMyPendingComponent;
  let fixture: ComponentFixture<ViewMyPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyPendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should call loadData`, function(){
    const vMP = fixture.componentInstance;
    expect(vMP.loadData).toHaveBeenCalled();
  });

  it(`should render title`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('My Pending Requests');
  });
  
});
