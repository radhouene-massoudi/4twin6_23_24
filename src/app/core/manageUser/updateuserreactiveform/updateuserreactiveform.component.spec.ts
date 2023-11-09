import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserreactiveformComponent } from './updateuserreactiveform.component';

describe('UpdateuserreactiveformComponent', () => {
  let component: UpdateuserreactiveformComponent;
  let fixture: ComponentFixture<UpdateuserreactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserreactiveformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateuserreactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
