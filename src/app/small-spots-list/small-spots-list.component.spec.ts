import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallSpotsListComponent } from './small-spots-list.component';

describe('SmallSpotsListComponent', () => {
  let component: SmallSpotsListComponent;
  let fixture: ComponentFixture<SmallSpotsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallSpotsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallSpotsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
