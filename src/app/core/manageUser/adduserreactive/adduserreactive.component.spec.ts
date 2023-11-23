import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserreactiveComponent } from './adduserreactive.component';

describe('AdduserreactiveComponent', () => {
  let component: AdduserreactiveComponent;
  let fixture: ComponentFixture<AdduserreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserreactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdduserreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
