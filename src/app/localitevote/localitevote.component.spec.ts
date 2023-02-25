import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitevoteComponent } from './localitevote.component';

describe('LocalitevoteComponent', () => {
  let component: LocalitevoteComponent;
  let fixture: ComponentFixture<LocalitevoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalitevoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalitevoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
