import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarRazaComponent } from './ruta-actualizar-raza.component';

describe('RutaActualizarRazaComponent', () => {
  let component: RutaActualizarRazaComponent;
  let fixture: ComponentFixture<RutaActualizarRazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarRazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
