import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRazaComponent } from './formulario-raza.component';

describe('FormularioRazaComponent', () => {
  let component: FormularioRazaComponent;
  let fixture: ComponentFixture<FormularioRazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
