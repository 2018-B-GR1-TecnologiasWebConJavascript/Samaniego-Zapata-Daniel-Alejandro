import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenPeliculaComponent } from './imagen-pelicula.component';

describe('ImagenPeliculaComponent', () => {
  let component: ImagenPeliculaComponent;
  let fixture: ComponentFixture<ImagenPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
