import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyAccountComponent } from './view-my-account.component';

describe('ViewMyAccountComponent', () => {
  let component: ViewMyAccountComponent;
  let fixture: ComponentFixture<ViewMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should be false`, () => {
    const vMA = fixture.componentInstance;
    expect(vMA.shouldDisplay).toBe(false);
  });

  it(`should render title`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form title')?.textContent).toContain('EMPLOYEE UPDATE FROM');
  });
  
});
