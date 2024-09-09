import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionclasesPage } from './gestionclases.page';

describe('GestionclasesPage', () => {
  let component: GestionclasesPage;
  let fixture: ComponentFixture<GestionclasesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionclasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
