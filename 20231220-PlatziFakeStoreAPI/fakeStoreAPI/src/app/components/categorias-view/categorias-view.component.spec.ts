import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasViewComponent } from './categorias-view.component';

describe('CategoriasViewComponent', () => {
  let component: CategoriasViewComponent;
  let fixture: ComponentFixture<CategoriasViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriasViewComponent]
    });
    fixture = TestBed.createComponent(CategoriasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
