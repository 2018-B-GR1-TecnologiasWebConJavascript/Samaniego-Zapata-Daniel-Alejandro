import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionProductosComponent } from './ruta-gestion-productos.component';

describe('RutaGestionProductosComponent', () => {
  let component: RutaGestionProductosComponent;
  let fixture: ComponentFixture<RutaGestionProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
