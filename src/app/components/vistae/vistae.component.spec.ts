import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaeComponent } from './vistae.component';

describe('VistaeComponent', () => {
  let component: VistaeComponent;
  let fixture: ComponentFixture<VistaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
