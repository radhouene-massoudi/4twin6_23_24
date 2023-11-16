import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserInputComponent } from './updateuser-input.component';

describe('UpdateuserInputComponent', () => {
  let component: UpdateuserInputComponent;
  let fixture: ComponentFixture<UpdateuserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateuserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
