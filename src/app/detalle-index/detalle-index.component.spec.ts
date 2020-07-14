import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIndexComponent } from './detalle-index.component';

describe('DetalleIndexComponent', () => {
  let component: DetalleIndexComponent;
  let fixture: ComponentFixture<DetalleIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
