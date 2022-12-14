import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacacoeseconjuntosComponent } from './macacoeseconjuntos.component';

describe('MacacoeseconjuntosComponent', () => {
  let component: MacacoeseconjuntosComponent;
  let fixture: ComponentFixture<MacacoeseconjuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacacoeseconjuntosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacacoeseconjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
