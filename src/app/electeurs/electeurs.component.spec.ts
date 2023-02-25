import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteursComponent } from './electeurs.component';

describe('ElecteursComponent', () => {
  let component: ElecteursComponent;
  let fixture: ComponentFixture<ElecteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecteursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
