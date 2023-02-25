import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetdeloisComponent } from './projetdelois.component';

describe('ProjetdeloisComponent', () => {
  let component: ProjetdeloisComponent;
  let fixture: ComponentFixture<ProjetdeloisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetdeloisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetdeloisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
