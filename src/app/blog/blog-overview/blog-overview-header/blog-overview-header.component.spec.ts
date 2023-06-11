import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOverviewHeaderComponent } from './blog-overview-header.component';

describe('BlogOverviewHeaderComponent', () => {
  let component: BlogOverviewHeaderComponent;
  let fixture: ComponentFixture<BlogOverviewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOverviewHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOverviewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
