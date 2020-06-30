import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEgresadoIndexComponent } from './mostrar-egresado-index.component';

describe('MostrarEgresadoIndexComponent', () => {
  let component: MostrarEgresadoIndexComponent;
  let fixture: ComponentFixture<MostrarEgresadoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarEgresadoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEgresadoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
