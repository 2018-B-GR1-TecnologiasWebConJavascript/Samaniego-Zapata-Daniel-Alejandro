import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarProductoComponent } from './ruta-actualizar-producto.component';

describe('RutaActualizarProductoComponent', () => {
  let component: RutaActualizarProductoComponent;
  let fixture: ComponentFixture<RutaActualizarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
