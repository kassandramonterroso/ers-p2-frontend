import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmployeesComponent } from './view-all-employees.component';

describe('ViewAllEmployeesComponent', () => {
  let component: ViewAllEmployeesComponent;
  let fixture: ComponentFixture<ViewAllEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should be false`,() => {
    const vAE = fixture.componentInstance;
    expect(vAE.shouldDisplay).toBe(false);
  });

  it(`should render heading`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('All Employees');
  });
  
});
