import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputclientComponent } from './inputclient.component';

describe('InputclientComponent', () => {
  let component: InputclientComponent;
  let fixture: ComponentFixture<InputclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
