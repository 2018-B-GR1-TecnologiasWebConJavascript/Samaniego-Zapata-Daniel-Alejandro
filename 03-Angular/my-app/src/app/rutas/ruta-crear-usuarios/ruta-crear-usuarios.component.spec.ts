import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearUsuariosComponent } from './ruta-crear-usuarios.component';

describe('RutaCrearUsuariosComponent', () => {
  let component: RutaCrearUsuariosComponent;
  let fixture: ComponentFixture<RutaCrearUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
