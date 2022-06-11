import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHomeDisplayComponent } from './manager-home-display.component';

describe('ManagerHomeDisplayComponent', () => {
  let component: ManagerHomeDisplayComponent;
  let fixture: ComponentFixture<ManagerHomeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHomeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerHomeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
