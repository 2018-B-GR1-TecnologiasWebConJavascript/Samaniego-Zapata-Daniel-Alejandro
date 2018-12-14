import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarUsuariosComponent } from './ruta-actualizar-usuarios.component';

describe('RutaActualizarUsuariosComponent', () => {
  let component: RutaActualizarUsuariosComponent;
  let fixture: ComponentFixture<RutaActualizarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
