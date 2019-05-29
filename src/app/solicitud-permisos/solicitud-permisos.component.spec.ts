import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPermisosComponent } from './solicitud-permisos.component';

describe('SolicitudPermisosComponent', () => {
  let component: SolicitudPermisosComponent;
  let fixture: ComponentFixture<SolicitudPermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudPermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
