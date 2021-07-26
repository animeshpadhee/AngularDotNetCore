import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEdiiDelComponent } from './add-edii-del.component';

describe('AddEdiiDelComponent', () => {
  let component: AddEdiiDelComponent;
  let fixture: ComponentFixture<AddEdiiDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEdiiDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEdiiDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
