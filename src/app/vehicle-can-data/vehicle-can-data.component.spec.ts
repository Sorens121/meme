import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCanDataComponent } from './vehicle-can-data.component';

describe('VehicleCanDataComponent', () => {
  let component: VehicleCanDataComponent;
  let fixture: ComponentFixture<VehicleCanDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleCanDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCanDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
