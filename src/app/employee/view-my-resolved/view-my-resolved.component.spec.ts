import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyResolvedComponent } from './view-my-resolved.component';

describe('ViewMyResolvedComponent', () => {
  let component: ViewMyResolvedComponent;
  let fixture: ComponentFixture<ViewMyResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyResolvedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
