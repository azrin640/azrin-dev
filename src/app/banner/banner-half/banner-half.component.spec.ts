import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHalfComponent } from './banner-half.component';

describe('BannerHalfComponent', () => {
  let component: BannerHalfComponent;
  let fixture: ComponentFixture<BannerHalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerHalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
