import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPersonalComponent } from './cv-personal.component';

describe('CvPersonalComponent', () => {
  let component: CvPersonalComponent;
  let fixture: ComponentFixture<CvPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
