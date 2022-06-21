import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyAccountComponent } from './update-my-account.component';

describe('UpdateMyAccountComponent', () => {
  let component: UpdateMyAccountComponent;
  let fixture: ComponentFixture<UpdateMyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMyAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should call ngOnInit`, function(){
    const uMA = fixture.componentInstance;
    expect(uMA.ngOnInit).toHaveBeenCalled();
  });

  it(`should render title`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form title')?.textContent).toContain('EMPLOYEE UPDATE FORM');
  });
  
});
