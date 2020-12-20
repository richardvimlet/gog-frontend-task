import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSpotComponent } from './small-spot.component';

describe('SmallSpotComponent', () => {
  let component: SmallSpotComponent;
  let fixture: ComponentFixture<SmallSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
