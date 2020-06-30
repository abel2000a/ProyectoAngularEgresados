import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEgresadoFormComponent } from './mostrar-egresado-form.component';

describe('MostrarEgresadoFormComponent', () => {
  let component: MostrarEgresadoFormComponent;
  let fixture: ComponentFixture<MostrarEgresadoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarEgresadoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEgresadoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
