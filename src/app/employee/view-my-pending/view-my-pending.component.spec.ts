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
});
