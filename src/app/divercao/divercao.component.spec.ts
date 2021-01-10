import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivercaoComponent } from './divercao.component';

describe('DivercaoComponent', () => {
  let component: DivercaoComponent;
  let fixture: ComponentFixture<DivercaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivercaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivercaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
