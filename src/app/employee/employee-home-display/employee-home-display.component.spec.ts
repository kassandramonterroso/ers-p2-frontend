import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHomeDisplayComponent } from './employee-home-display.component';

describe('EmployeeHomeDisplayComponent', () => {
  let component: EmployeeHomeDisplayComponent;
  let fixture: ComponentFixture<EmployeeHomeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHomeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeHomeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should render title`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('title')?.textContent).toContain('Employee Home');
  });
  
});
