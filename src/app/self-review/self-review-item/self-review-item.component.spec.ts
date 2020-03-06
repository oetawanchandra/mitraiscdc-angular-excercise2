import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfReviewItemComponent } from './self-review-item.component';

describe('SelfReviewItemComponent', () => {
  let component: SelfReviewItemComponent;
  let fixture: ComponentFixture<SelfReviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfReviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
