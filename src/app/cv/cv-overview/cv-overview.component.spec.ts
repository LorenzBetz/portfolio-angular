import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvOverviewComponent } from './cv-overview.component';

describe('CvOverviewComponent', () => {
  let component: CvOverviewComponent;
  let fixture: ComponentFixture<CvOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
