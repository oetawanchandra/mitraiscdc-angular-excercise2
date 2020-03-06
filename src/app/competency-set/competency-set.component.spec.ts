import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencySetComponent } from './competency-set.component';

describe('CompetencySetComponent', () => {
  let component: CompetencySetComponent;
  let fixture: ComponentFixture<CompetencySetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencySetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencySetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
