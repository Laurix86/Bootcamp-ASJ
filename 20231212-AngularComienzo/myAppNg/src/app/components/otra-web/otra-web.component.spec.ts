import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtraWebComponent } from './otra-web.component';

describe('OtraWebComponent', () => {
  let component: OtraWebComponent;
  let fixture: ComponentFixture<OtraWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtraWebComponent]
    });
    fixture = TestBed.createComponent(OtraWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
