import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgerrorsComponent } from './msgerrors.component';

describe('MsgerrorsComponent', () => {
  let component: MsgerrorsComponent;
  let fixture: ComponentFixture<MsgerrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgerrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgerrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
