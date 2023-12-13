import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDosComponent } from './proyecto-dos.component';

describe('ProyectoDosComponent', () => {
  let component: ProyectoDosComponent;
  let fixture: ComponentFixture<ProyectoDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectoDosComponent]
    });
    fixture = TestBed.createComponent(ProyectoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
