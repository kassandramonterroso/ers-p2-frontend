import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRequestComponent } from './submit-request.component';

describe('SubmitRequestComponent', () => {
  let component: SubmitRequestComponent;
  let fixture: ComponentFixture<SubmitRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should be false`,() => {
    const sR = fixture.componentInstance;
    expect(sR.shouldDisplay).toBe(false);
  });

  it(`should render title`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form title')?.textContent).toContain('REQUEST FORM');
  });
  
});
